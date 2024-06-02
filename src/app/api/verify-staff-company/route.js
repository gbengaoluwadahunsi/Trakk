
import { NextResponse } from 'next/server';

export async function POST(request) {
  const { companyName } = await request.json();

  // Mock list of valid staff codes
  const validStaffCompany = ['x20', '6sigma', '8450'];

  if (validStaffCompany.includes(companyName)) {
    return NextResponse.json({ valid: true });
  } else {
    return NextResponse.json({ valid: false }, { status: 400 });
  }
}






