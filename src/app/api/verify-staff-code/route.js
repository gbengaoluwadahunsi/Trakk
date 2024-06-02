
import { NextResponse } from 'next/server';

export async function POST(request) {
  const { staffCode } = await request.json();

  // Mock list of valid staff codes
  const validStaffCodes = ['ABC123', 'DEF456', 'GHI789'];

  if (validStaffCodes.includes(staffCode)) {
    return NextResponse.json({ valid: true });
  } else {
    return NextResponse.json({ valid: false }, { status: 400 });
  }
}






