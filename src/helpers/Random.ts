export class Random {

    private static readonly FIRST_NAMES = [
        'Ankit',
        'Rahul',
        'Amit',
        'Rohit',
        'Karan',
        'Priya',
        'Neha',
        'Pooja',
        'Sneha',
        'Riya'
    ];

    private static readonly LAST_NAMES = [
        'Sharma',
        'Patel',
        'Jadeja',
        'Singh',
        'Mehta',
        'Verma',
        'Joshi',
        'Kapoor'
    ];

    private static readonly PET_NAMES = [
        'Rocky',
        'Max',
        'Charlie',
        'Buddy',
        'Leo',
        'Bella',
        'Lucy',
        'Daisy'
    ];

    static number(min = 1000, max = 999999): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    static username(): string {
        return `user_${Date.now()}_${this.number(100, 999)}`;
    }

    static email(): string {
        return `${this.username()}@example.com`;
    }

    static password(length = 10): string {
        const chars =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        let password = '';

        for (let i = 0; i < length; i++) {
            password += chars.charAt(
                Math.floor(Math.random() * chars.length)
            );
        }

        return password;
    }

    static phone(): string {
        return `9${this.number(100000000, 999999999)}`;
    }

    static firstName(): string {
        return this.FIRST_NAMES[
            Math.floor(Math.random() * this.FIRST_NAMES.length)
        ];
    }

    static lastName(): string {
        return this.LAST_NAMES[
            Math.floor(Math.random() * this.LAST_NAMES.length)
        ];
    }

    static petName(): string {
        return this.PET_NAMES[
            Math.floor(Math.random() * this.PET_NAMES.length)
        ];
    }
}