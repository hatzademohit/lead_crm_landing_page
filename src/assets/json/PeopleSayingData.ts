import PlayStore from '../img/playstore.png'
import Card1Img from '../img/card1-img.png'
import Card2Img from '../img/card2-img.png'
import Card3Img from '../img/card3-img.png'

interface Feature {
    id: Number;
    icon: string;
    description: string;
    userImage: string;
    userName: string;
}

export const PeopleSayingData: Feature[] = [
    {
        id: 1,
        icon: PlayStore,
        description: '“Reliable Data Sync I’ve only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.“',
        userImage: Card1Img,
        userName: 'David Fincher'
    },
    {
        id: 2,
        icon: PlayStore,
        description: 'My experience with LeadCRM has been excellent. It has streamlined my workflow, improved lead tracking, and made follow-ups more efficient. The responsive customer support is a big plus. Highly recommend it for reliable lead management!”',
        userImage: Card2Img,
        userName: 'Lillian Williams'
    },
    {
        id: 3,
        icon: PlayStore,
        description: '“Reliable Data Sync I’ve only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.“',
        userImage: Card3Img,
        userName: 'Michael'
    },
    {
        id: 4,
        icon: PlayStore,
        description: '“Reliable Data Sync I’ve only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.“',
        userImage: Card1Img,
        userName: 'David Fincher'
    },
    {
        id: 5,
        icon: PlayStore,
        description: 'My experience with LeadCRM has been excellent. It has streamlined my workflow, improved lead tracking, and made follow-ups more efficient. The responsive customer support is a big plus. Highly recommend it for reliable lead management!”',
        userImage: Card2Img,
        userName: 'Lillian Williams'
    },
    {
        id: 6,
        icon: PlayStore,
        description: '“Reliable Data Sync I’ve only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.“',
        userImage: Card3Img,
        userName: 'Michael'
    },
];