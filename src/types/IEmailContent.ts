export interface IEmailContent {
    subject: string;
    quote: {
        quote: string;
        author: string;
    };
    announcements: string[];
    hasAnnouncements?: boolean;
    recognitions: Array<{
        thanks: string;
        person: string;
    }>;
    hasRecognitions?: boolean;
    upcomingReleases: Array<{
        release: string;
        date: string;
    }>;
    hasUpcomingReleases?: boolean;
    upcomingEvents: Array<{
        event: string;
        date: string;
    }>;
    hasUpcomingEvents?: boolean;
    techLinks: ILink[];
    hasTechLinks?: boolean;
    notTechLinks: ILink[];
    hasNotTechLinks?: boolean;
    openPositions: string[];
    incentive: string;
    hasOpenPositions?: boolean;
    hasDevTips: boolean;
}

interface ILink {
    title: string;
    URL: string;
    person: string;
}
