import { NextResponse } from 'next/server';

export function GET() {
    try {
        return NextResponse.json('Howdy Edgar Guzman', {
            status: 200,
        });
    } catch (error) {
        let err = error as Error;

        console.error('[HOWDY_GET]', err.cause);

        return new NextResponse('Internal Error', {
            status: 500,
        });
    }
}
