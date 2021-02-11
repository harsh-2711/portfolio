import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ExperienceAccordion from '../../containers/experienceAccordion/ExperienceAccordion.js';
// import experience from '../../shared/experience_data.json';
import "./Experience.css";
import { Fade } from "react-reveal";

const experience = {
	title: "Experience",
	subtitle: "Work, Internship and Volunteership",
	description:
		"I have worked with many evolving startups as Full Stack Developer, Backend Developer and Deep Learning intern. I have also worked with some well established companies mostly as Software Developer. I like healthy conversations around tech and that is why I am also involved with many Open Source communities as a representative.",
	header_image_path: "experience.svg",
	sections: [
		{
			title: "Work",
			experiences: [
				{
					title: "Product Engineer",
					company: "Lyearn",
					company_url: "https://lyearn.com/",
					logo_path: "lyearn.jpeg",
					duration: "Jul 2020 - Present",
					location: "Work from home",
					description:
						"Taught myself concepts of realtime video communication over internet including WebRTC APIs, XMPP servers, STUN/TURN candidates, etc. Developed the functionality of selective stream cutoff for supporting low bandwidth users. Working on enabling meeting recording functionality on VideoBridge by taking reference from Jibri",
					color: "#000000"
				},
				{
					title: "Platform Engineer",
					company: "Appbase.io",
					company_url: "https://appbase.io/",
					logo_path: "appbase.jpeg",
					duration: "Aug 2019 - Jan 2020",
					location: "Work from home",
					description:
						"Designed the CLI of the ABC library which is a command-line tool to interact with Appbase.io along with features of importing data from any popular data source (Postgres, SQL, Mongo) to ElasticSearch using Golang along with developing the Arc library which is a modular API gateway between Appbase.io dashboard and ElasticSearch cluster by enhancing the current architectural tests and shifting it to support ElasticSearch v7.x in Golang.",
					color: "#68c6f2"
				}
			]
		},
		{
			title: "Internships",
			experiences: [
				{
					title: "Software Development Engineer",
					company: "Headout",
					company_url: "https://headout.com/",
					logo_path: "headout.png",
					duration: "May 2020 - Jul 2020",
					location: "Work from home",
					description:
						"Developed a fully automated system of booking a tour through vendor APIs to decrease the order fullfillment time by almost 90%. Also, developed a sorting algorithm for ranking reviews based on sentiments, post time, etc. which increased conversion ratio by almost 5%",
					color: "#ff0000"
				},
				{
					title: "Software Developer",
					company: "Appbase.io",
					company_url: "https://appbase.io/",
					logo_path: "appbase.jpeg",
					duration: "Oct 2018 - July 2019",
					location: "Work from home",
					description:
						"Designed and developed a Swift client for iOS and macOS devices to directly communicate with ElasticSearch servers using CRUD queries along with modified search and bulk transfer and streaming methods. Also developed an Android Search Widget library with both offline and online database connectivity which reduces development time by almost 90%",
					color: "#68c6f2"
				},
				{
					title: "Research Intern",
					company: "Indian Space Research Organisation",
					company_url:
						"https://www.isro.gov.in/",
					logo_path: "isro.jpg",
					duration: "May 2019 - July 2019",
					location: "Ahmedabad, Gujarat",
					description:
						"Developed a python toolbox for Hyperspectral Unmixing of Data having core features like Dimensionality Reduction, Material Count, Non-Linear Unmixing, etc. for Satellite Image Processing. I also worked on a research problem of introducing regularisation techniques for the sparse locality in non-linear unmixing.",
					color: "#e38035"
				},
				{
					title: "Full Stack Developer",
					company: "Pegasus Automation Pvt Ltd.",
					company_url:
						"https://www.linkedin.com/search/results/all/?keywords=Pegasus%20Automation%20Pvt%20Ltd.",
					logo_path: "pegasus.jpeg",
					duration: "Aug 2018 - May 2019",
					location: "Gandhinagar, Gujarat",
					description:
						"Created multiple online databases to sync the content for different shared resources along with setting offline servers for storing the scheduling and power consumption instructions and syncing with online servers. In the app setup, I developed the backend of Android app by using AWS Android SDK to stream the changes on both online and offline servers.",
					color: "#1849d5"
				},
				{
					title: "GSoC Student (Software Developer)",
					company: "FOSSASIA",
					company_url:
						"http://fossasia.org/",
					logo_path: "fossasia.png",
					duration: "Apr 2018 - Jan 2019",
					location: "Work from home",
					description:
						"In the Android app, developed interface for 3 different sensors available in PSLab Hardware device along with developing a fully functional Logic Analyzer using background threads and graphing tools. In the desktop app, fixed issues related to the functions calling by making seperate classes for each sensor. Also, fixed the PyQt dependency issue of the library by adding necessary command line package installation commands solving around 60% of software installation issues",
					color: "#c3291b"
				}
			]
		},
		{
			title: "Volunteerships",
			experiences: [
				{
					title: "Developer Program Member",
					company: "Github",
					company_url: "https://github.com/",
					logo_path: "github_logo.png",
					duration: "Jan 2019 - PRESENT",
					location: "Work From Home",
					description:
						"I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Kiwix, Sympy, Fossasia, OpenDataKit, Open Tech, Epic Games, etc. These contributions include bug fixes, feature requests and formulating peoper documentation for project.",
					color: "#181717"
				},
				{
					title: "Developer Students Club Member",
					company: "DSC DAIICT",
					company_url:
						"https://ossdaiict.github.io/dsc-website",
					logo_path: "dsc_logo.png",
					duration: "Sep 2018 - PRESENT",
					location: "Gandhinagar, Gujarat",
					description:
						"We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
					color: "#0C9D58"
				}
				// {
				// 	title: "Mozilla Campus Captain",
				// 	company: "Mozilla",
				// 	company_url: "https://www.mozilla.org/",
				// 	logo_path: "mozilla_logo.png",
				// 	duration: "Oct 2018 - PRESENT",
				// 	location: "Gandhinagar, Gujarat",
				// 	description:
				// 		"My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
				// 	color: "#000000"
				// }
			]
		},
		{
			title: "Publications",
			experiences: [
				{
					title: "E-LSTM: Semantic and Sentimental Features Retention for Emotion Detection in Text",
					company: "Association for Computational Linguistics",
					company_url: "https://www.aclweb.org/anthology/S19-2030/",
					logo_path: "acl.png",
					duration: "June 2019 - PRESENT",
					location: "Work From Home",
					description:
						"The paper was published by Association for Computational Linguistics. The paper provides an approach to solve the problem of Contextual Emotion Detection in Texts using embedding layers and memory unit cells.",
					color: "#da3832"
				}
			]
		},
		{
			title: "Achievements",
			experiences: [
				{
					title: "Google Summer of Code 2018 Student",
					company: "FOSSASIA",
					company_url: "http://fossasia.org/",
					logo_path: "fossasia.png",
					duration: "May 2018 - Aug 2018",
					location: "",
					description:
						"Worked as GSoC Student under FOSSASIA's PSLab Project.",
					color: "#c3291b"
				},
				{
					title: "Google Code-In 2018 Mentor",
					company: "FOSSASIA",
					company_url: "http://fossasia.org/",
					logo_path: "fossasia.png",
					duration: "Oct 2019 - Dec 2018",
					location: "",
					description:
						"Mentored 5 students in Google Code-in programme under FOSSASIA organisation.",
					color: "#c3291b"
				},
				{
					title: "Winner",
					company: "Swadheenta Hackathon",
					company_url: "https://www.linkedin.com/company/dcei/?originalSubdomain=za",
					logo_path: "swadheenta.png",
					duration: "Feb 2020",
					location: "",
					description:
						"Made offline data storage and sharing platform same as Google Drive but which works without internet service.",
					color: "#b4dbb5"
				},
				{
					title: "Runners Up",
					company: "Hackout Hackathon",
					company_url: "https://hackout.devfolio.co/",
					logo_path: "hackout.png",
					duration: "Oct 2019",
					location: "",
					description:
						"Made broadcasting service which can transfer compressed data using a series of QR codes for offline data transmission across a predefined channel.",
					color: "#000000"
				},
				{
					title: "Second Runners Up",
					company: "IEEE Humanitarian Contest",
					company_url: "https://ias.ieee.org/images/files/CMD/2019/CMD_Contest_Results_2019/Humanitarian_Contest_Results_2019.pdf",
					logo_path: "ieee_humanitarian.png",
					duration: "Mar 2019 - June 2019",
					location: "",
					description:
						"Designed and developed smart camera system which can bee directly fitted on spectacles of any blind person having functionalities like Sign recognition, Object recognition, Depth recognition, Smart Navigation and a personal assistant. ",
					color: "#7cb959"
				},
				{
					title: "National Semi-Finalist",
					company: "FlipKart Grid Challenge",
					company_url: "https://dare2compete.com/o/Flipkart-GRiD-Teach-The-Machines-2019-74928",
					logo_path: "flipkart_grid.jpeg",
					duration: "Jan 2018 - March 2018",
					location: "",
					description:
						"Stood in top 3 teams  at college level in the first online quiz round. Survived till semi-finals by developing and improving upon an Object Localisation model. ",
					color: "#000000"
				},
				{
					title: "Google Foobar Challenge Recipient",
					company: "Google",
					company_url: "https://www.aclweb.org/anthology/S19-2030/",
					logo_path: "google.png",
					duration: "June 2019 - July 2019",
					location: "",
					description:
						"Completed Google's secret hiring Foobar challenge twice.",
					color: "#de70a2"
				},
				{
					title: "Second Runner Up",
					company: "Yes Bank Datathon Challenge",
					company_url: "https://skillenza.com/challenge/yes-bank-datathon",
					logo_path: "yes_bank_datathon.jpeg",
					duration: "Sep 2018 - Dec 2018",
					location: "",
					description:
						"Designed a model to effictively parse useful data from provided customer's dataset and geographically map it to provide an insight about how and from where to get next possible customers and how to maintain current customers.",
					color: "#21558c"
				}
			]
		}
	]
};

class Experience extends Component {
	render() {
		return (
			<div className="experience-main">
				<Header />
				<div className="basic-experience">
					<Fade bottom duration={1000} distance="40px">
						<div className="experience-heading-div">
							<div className="experience-heading-img-div">
								<img
								alt="Experience Card"
									src={require(`../../assests/images/${experience["header_image_path"]}`)}
								/>
							</div>
							<div className="experience-heading-text-div">
								<h1 className="experience-heading-text">{experience.title}</h1>
								<h3 className="experience-heading-sub-text">
									{experience["subtitle"]}
								</h3>
								<p className="experience-header-detail-text subTitle">
									{experience["description"]}
								</p>
							</div>
						</div>
					</Fade>
				</div>
				<ExperienceAccordion sections={experience["sections"]} />
				<Footer />
			</div>
		);
	}
}

export default Experience;
