import { ImageResponse } from 'next/og';
import { join } from 'path';
import { readFileSync } from 'fs';

export const runtime = 'edge';

// Function to convert local image to base64
function getLocalImage(path: string): string {
  const imageBuffer = readFileSync(join(process.cwd(), 'public', path));
  const base64Image = Buffer.from(imageBuffer).toString('base64');
  const mimeType = path.endsWith('.png') ? 'image/png' : 'image/jpeg';
  return `data:${mimeType};base64,${base64Image}`;
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title') || 'French Tutor Buffalo NY';
    const imageKey = searchParams.get('image') || 'louvres04'; // default image

    // Map of available images
    const images = {
      louvres04: getLocalImage('louvres04.jpeg'),
      croissant: getLocalImage('croissant05.jpeg'),
      vignoble: getLocalImage('vignoble02.jpeg'),
      toureiffel: getLocalImage('tour-eiffel03.jpeg'),
      notreDame: getLocalImage('notre-dame01-scaled.jpeg'),
      logo: getLocalImage('logo3.png'),
    };

    // Get the selected image or default to louvres04
    const selectedImage = images[imageKey as keyof typeof images] || images.louvres04;

    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          {/* Background Image */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `url(${selectedImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.3,
            }}
          />

          {/* Logo */}
          <img
            src={images.logo}
            alt="Logo"
            style={{
              width: '400px',
              marginBottom: '20px',
              position: 'relative',
              zIndex: 1,
            }}
          />

          {/* Title */}
          <div
            style={{
              fontSize: '60px',
              fontWeight: 'bold',
              color: '#1A65C1',
              textAlign: 'center',
              padding: '20px',
              position: 'relative',
              zIndex: 1,
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '10px',
            }}
          >
            {title}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    console.error(e);
    return new Response(`Failed to generate image: ${e}`, {
      status: 500,
    });
  }
}