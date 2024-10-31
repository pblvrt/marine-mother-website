import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title') || 'French Tutor Buffalo NY';
    const imageKey = searchParams.get('image') || 'louvres04'; // default image

    // Map of available images with their URLs
    const images = {
      louvres04: '/louvres04.jpeg',
      croissant: '/croissant05.jpeg',
      vignoble: '/vignoble02.jpeg',
      toureiffel: '/tour-eiffel03.jpeg',
      notreDame: '/notre-dame01-scaled.jpeg',
      logo: '/logo3.png',
    };

    // Get the selected image or default to louvres04
    const selectedImage = images[imageKey as keyof typeof images] || images.louvres04;
    const logoImage = images.logo;

    // Fetch the images
    const imageData = await fetch(new URL(selectedImage, request.url)).then(res => res.arrayBuffer());
    const logoData = await fetch(new URL(logoImage, request.url)).then(res => res.arrayBuffer());

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
              backgroundImage: `url(data:image/jpeg;base64,${Buffer.from(imageData).toString('base64')})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.3,
            }}
          />

          {/* Logo */}
          <img
            src={`data:image/png;base64,${Buffer.from(logoData).toString('base64')}`}
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