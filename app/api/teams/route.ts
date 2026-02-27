import { NextRequest, NextResponse } from "next/server";
import { getSessionOrNull } from "@/lib/auth-server-helpers";
import prisma from "@/lib/db";

export async function GET(request: NextRequest) {
  try {
    // Get the current user
    const session = await getSessionOrNull();

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = session.user.id;

    // Only return teams where the user is a member
    const teams = await prisma.team.findMany({
      where: {
        members: {
          some: {
            userId: userId,
          },
        },
      },
      include: {
        members: {
          where: {
            userId: userId,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    const teamsWithoutMembers = teams.map(({ members, ...team }) => team);

    return NextResponse.json(teamsWithoutMembers);
  } catch (error) {
    console.error("Error fetching teams:", error);
    return NextResponse.json(
      { error: "Failed to fetch teams" },
      { status: 500 },
    );
  }
}