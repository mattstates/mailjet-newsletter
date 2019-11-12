import { IEmailContent } from '../types/IEmailContent';
import greaterThanZero from '../utils/greaterThanZero';

const emailContent: IEmailContent = {
    subject: 'Newsletter',
    quote: {
        quote: 'I don\'t know half of you half as well as I should like; and I like less than half of you half as well as you deserve.',
        author: 'Bilbo B.'
    },
    announcements: ['Thanks to you all and to all a good night.'],
    recognitions: [
        {
            thanks: 'Thanks to <strong>Alan Turing</strong> for helping break enigma.',
            person: 'Allied Forces'
        }
    ],
    upcomingReleases: [
        {
            release: 'Version 5',
            date: '(11/18)'
        },
        {
            release: 'Version 6',
            date: '(11/18)'
        }
    ],
    upcomingEvents: [
        {
            event: 'Pizza Party',
            date: '(11/22)'
        },
        {
            event: 'Thanksgiving',
            date: '(11/28)'
        }
    ],
    techLinks: [
        {
            title: 'MDN JS Docs',
            URL: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference',
            person: 'Mozilla'
        },
        {
            title: 'MS C# Docs',
            URL: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
            person: 'Microsoft'
        }
    ],
    notTechLinks: [
        {
            title: 'How to Win Friends and Influence People',
            URL: 'https://en.wikipedia.org/wiki/How_to_Win_Friends_and_Influence_People',
            person: 'Dale Carnegie'
        }
    ],
    openPositions: ['Back End Architect'],
    incentive: 'Refer a friend - get a bonus!',
    hasDevTips: false
};

emailContent.hasAnnouncements = greaterThanZero(emailContent.announcements);
emailContent.hasNotTechLinks = greaterThanZero(emailContent.notTechLinks);
emailContent.hasOpenPositions = greaterThanZero(emailContent.openPositions);
emailContent.hasRecognitions = greaterThanZero(emailContent.recognitions);
emailContent.hasTechLinks = greaterThanZero(emailContent.techLinks);
emailContent.hasUpcomingEvents = greaterThanZero(emailContent.upcomingEvents);
emailContent.hasUpcomingReleases = greaterThanZero(emailContent.upcomingReleases);

export default emailContent;
