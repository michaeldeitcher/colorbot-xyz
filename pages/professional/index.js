import { MuiThemeProvider } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { Link } from '@material-ui/core'
import { NextSeo } from 'next-seo';

let keyIndex = 0;
const ExperienceItem = (props) => {
    const item = props.item;
    const Bullets = ({item}) => (
        <ul>
        {item.bullets.map(bullet => {
            keyIndex += 1;
            return (
                <li key={keyIndex}>{bullet}</li>
            )
        })}
        </ul>
    );
    return (
        <Container style={{padding:'0px'}}>
            <Typography variant="h6">{item.companyName}</Typography>
            <Typography variant="subtitle1">{item.companyDesc}</Typography>
            <p style={{margin:'0px'}}><Link color="primary" href={item.companyLink}>{item.companyLink}</Link></p>
            <Typography variant="h6" style={{display: 'inline', paddingRight: '10px'}}>{item.position}</Typography>
            <Typography variant="subtitle1" style={{display: 'inline'}}>{item.hiredDates}</Typography>
            <Bullets item={item} />
        </Container>
    );
}

const Page = () => {
    const printDocument = () => {
        window.print();
    }

    const content = [
        {
            companyName: 'Trekaroo Inc.',
            companyDesc: 'Trekaroo is the fun way to get the inside scoop on traveling with kids. They provide reviews of kid-friendly activities, hotels, and travel tips for family fun.',
            companyLink: 'www.trekaroo.com',
            position: 'Software Developer Contractor',
            hiredDates: '2014-2019',
            bullets: [
                "Rebuilt Trekaroo as a responsive Ember.js client with a Rails API server.",
                "Implemented Trekaroo full content search with Elastic Search. Indexing data and refining rules for Trekaroo's propriatary and Wordpress content.",
                "Drastically refined the way content is added and edited in Trekaroo, making it fast and fun to build effective Travel Guides.",
                "Built nightly update system of booking.com hotel affiliate content.",
                "Published Trekaroo iOS app with push notification support.",
                "Maintained and improved SEO, Geolocation, and 3rd party Mail Marketing integrations."
            ]
        },
        {
            companyName: 'Lens Inc.',
            companyDesc: 'A decentralized solution for you to own and control access to your contact data.',
            companyLink: 'www.mylens.io',
            position: 'Software Developer Contractor',
            hiredDates: '2018-2019',
            bullets: [
                "Developed native iOS application for managing contact information, creating and revoking phone and email aliases."
            ]
        },
        {
            companyName: 'Coupa Software Inc.',
            companyDesc: 'Cloud Platform for Business Spend',
            companyLink: 'www.coupa.com',
            position: 'Software Developer',
            hiredDates: '2011-2014',
            bullets: [
                "Rails development for Coupa's Procurement and Invoicing products. Developed and released features for Coupa Mobile on iOS.",
                "Managed the outsourcing of our Android development.",
                "Lead development of Coupa's Supplier Portal that enables suppliers to offer products through Coupa's Procurement Platform.",
                "Evangelist for agile methodolgies; convincing first development team at Coupa to have daily standups and sprint planning cycles.",
                "Winner of most bugs fixed in major release award."
            ]
        },
        {
            companyName: 'Gannett Company Inc. ­ The Bold Italic',
            companyDesc: 'A distinctive web magazine for San Francisco locals.',
            companyLink: 'www.thebolditalic.com',
            position: 'Software Developer',
            hiredDates: '2010-2011',
            bullets: [
                "Development of all features of web magazine. These include editing and publishing of articles, digest emails, promotions, merchant presence and promotions, and member community features.",
                "Rails test driven development with RSpec, Selenium, and Webrat."
            ]
        },
        {
            companyName: 'Trekaroo Inc.',
            companyDesc: 'Family Travel Community Portal',
            companyLink: 'www.trekaroo.com',
            position: 'Lead Software Developer',
            hiredDates: '2008-2010',
            bullets: [
                "Built site from inception.",
                "Iterated quickly to develop a system to leverage our limited seed content and let our community and administrators grow our site's content. Collaborated with team members to create new features, design the UI, enhance SEO, and monitor analytics.",
                "Developed all aspects of the site in Ruby on Rails with MySQL, JQuery, HTML, CSS.",
                "Leveraged other technologies such as Facebook Platform, Google Maps, and Flickr API to enhance functionality and content.",
                "Design and Built mobile version of web site using JQuery Mobile."
            ]
        },
        {
            companyName: 'Pure Digital Technologies Inc.',
            companyDesc: 'Camera and camcorder processing system installed at 5000+ retail locations.',
            companyLink: 'www.trekaroo.com',
            position: 'Software Engineering Team Lead',
            hiredDates: '2006-2008',
            bullets: [
                "Reduced errors in migrations and testing by refactoring a complex .NET and SQL Server backend to use VMWare virtualization for development and staging environments.",
                "Managed Romanian consulting team to add additional functionality to Rite Aid Photo Online"
            ]
        },
        {
            companyName: '',
            companyDesc: '',
            companyLink: '',
            position: 'Senior Software Engineer',
            hiredDates: '2005-2006',
            bullets: [
                "Released first Rite Aid One Hour Photo Online Active-X control with image transformation and delivery support.",
                "Camera integration into camera processing appliance. Wrote camera refurbishment application in C# and C++."
            ]
        },
        {
            companyName: 'Macromedia, Inc.',
            companyDesc: 'Flash - Motion graphics development tool.',
            companyLink: '',
            position: 'Senior Software Engineer',
            hiredDates: '2000-2004',
            bullets: [
                "Developed a user interface for external data source connectivity from flash components.",
                "Released streaming emulation and bandwidth profiling visualization of the flash player.",
                "Developed and published the Flash Importer SDK, an API for 3rd parties to import media and ActionScript into the Flash authoring tool."
            ]
        },
        {
            companyName: 'Websense, Inc.',
            companyDesc: 'Enterprise internet content filtering.',
            companyLink: '',
            position: 'Software Engineer',
            hiredDates: '1998-1999',
            bullets: [
                "Implemented Access Policy manager to control internet content based on time and user/group directory systems."
            ]
        },
    ];

    const ExperienceItems = ({items}) => (
        <>
        {items.map(item => {
            keyIndex += 1;
            return (
                <ExperienceItem key={keyIndex} item={item} />
            )
        })}
        </>
    )

    const showAddress = false;
    const Address = () => {
        if(showAddress) {
            return (
                <><Typography variant="body1">Albuquerque, NM<br/>415-407-7178<br/>michaeldeitcher@gmail.com</Typography></>
            )
        } else
            return (<></>)
    }

    return (
    <>
    <NextSeo
        title="Michael Deitcher Resume"
        description=""
    />

    <Container>
        <Grid container spacing={3}  style={{marginTop:'20px'}}>
            <Grid item xs={8}>
                <Typography variant="h4" component="h1">Michael Deitcher</Typography>
                <Typography variant="h5">Full Stack Developer</Typography>
            </Grid>
            <Grid item xs={4}>
                <Address/>
            </Grid>
        </Grid>


        <Grid container spacing={3}  style={{marginTop:'20px'}}>
            <Grid item xs={8}>
                <Typography variant="h5" component="h2">Experience</Typography>
                <ExperienceItems items={content}/>
                <Typography variant="h5" component="h2">Education</Typography>
                <Container style={{padding:'0px'}}>
                    <Typography variant="h6" style={{display: 'inline', paddingRight: '10px'}}>State University of New York Albany, NY</Typography>
                    <Typography variant="subtitle1" style={{display: 'inline'}}>1987-1991</Typography>
                    <Typography variant="body1">Bachelor of Science in Economics</Typography>
                </Container>

            </Grid>
            <Grid item xs={4}>
                <Typography variant="h5" component="h2">Skills</Typography>
                <ul>
                    <li>SPA with Ember.js or React</li>
                    <li>Server Development with Ruby on Rails and MySQL.</li>
                    <li>Responsive Web Application Design</li>
                    <li>Agile Methodologies</li>
                    <li>Git</li>
                    <li>Project Management with Jira or Pivotal Tracker</li>
                    <li>Rspec and Selenium Testing</li>
                    <li>Elastic Search, Redis, Resque.</li>
                    <li>iOS Development with swift Bluetooth LE</li>
                    <li>Arduino Programming with C++, Game Development with Unity, C#, and Blender</li>
                </ul>
            </Grid>
        </Grid>

    </Container>
    </>
)};

export default Page;