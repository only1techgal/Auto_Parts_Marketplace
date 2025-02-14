export async function GET(request: Request) {
    try {
      const session = await getServerSession(authOptions);
      
      if (!session) {
        return NextResponse.json(
          { success: false, error: 'Unauthorized' },
          { status: 401 }
        );
      }
  
      const listings = await prisma.part.findMany({
        where: {
          sellerId: session.user.id,
        },
        orderBy: {
          createdAt: 'desc',
        },
      });
  
      return NextResponse.json({ success: true, data: listings });
    } catch (error) {
      return NextResponse.json(
        { success: false, error: 'Failed to fetch listings' },
        { status: 500 }
      );
    }
  }
