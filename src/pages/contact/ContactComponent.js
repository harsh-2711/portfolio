import React, { Component} from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import SocialMedia from '../../components/socialMedia/SocialMedia';
import Button from '../../components/button/Button';
import {greeting} from '../../portfolio';
import {Fade} from 'react-reveal';
import './ContactComponent.css';


const blogSection = {
	/* Blogs Section */

	title: "Blogs",
	subtitle:
		"Blogging forces me to teach myself what I don’t know and to articulate what I do know. So, I write weeekly tech blogs as I believe in giving what I have received from the community",
	link: "https://medium.com/@harsh.2711.patel",
	avatar_image_path: "blogs_image.svg"
};

const addressSection = {
	title: "Reach me out",
	subtitle:
		"A-107 HoR Men, DAIICT, Gandhinagar, Gujarat - 382421",
	avatar_image_path: "address_image.svg",
	location_map_link: "https://goo.gl/maps/xQZXRzKXoVgSzAuu5"
};

const phoneSection = {
    title: "Phone Number",
    subtitle: "+91 7990252119"
}

const ContactData = {
	title: "Need a second hand?",
    profile_image_path: "harsh-circle-2.png",
    description: "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Distributed Systems, Anything Backend, DevOps, Mobile, and Opensource Development."
};

class Contact extends Component {
    render() {
        return (
					<div className="contact-main">
						<Header />
						<div className="basic-contact">
							<Fade bottom duration={1000} distance="40px">
								<div className="contact-heading-div">
									<div className="contact-heading-img-div">
										<img
											alt="Profile Card"
											src={require(`../../assests/images/${ContactData["profile_image_path"]}`)}
										/>
									</div>
									<div className="contact-heading-text-div">
										<h1 className="contact-heading-text">
											{ContactData["title"]}
										</h1>
										<p className="contact-header-detail-text subTitle">
											{ContactData["description"]}
										</p>
										<SocialMedia />
										<div className="resume-btn-div">
											<Button
												text="See My Resume"
												newTab={true}
												href={greeting.resumeLink}
											/>
										</div>
									</div>
								</div>
							</Fade>
							<Fade bottom duration={1000} distance="40px">
								<div className="blog-heading-div">
									<div className="blog-heading-text-div">
										<h1 className="blog-heading-text">
											{blogSection["title"]}
										</h1>
										<p className="blog-header-detail-text subTitle">
											{blogSection["subtitle"]}
										</p>
										<div className="blogsite-btn-div">
											<Button
												text="Visit My Blogsite"
												newTab={true}
												href={blogSection.link}
											/>
										</div>
									</div>
									<div className="blog-heading-img-div">
										<img
										alt="Blog Card"
											src={require(`../../assests/images/${blogSection["avatar_image_path"]}`)}
										/>
									</div>
								</div>
							</Fade>
							<Fade bottom duration={1000} distance="40px">
								<div className="address-heading-div">
									<div className="contact-heading-img-div">
										<img
										alt="Address Card"
											src={require(`../../assests/images/${addressSection["avatar_image_path"]}`)}
										/>
									</div>
									<div className="address-heading-text-div">
										<h1 className="blog-heading-text">
											{addressSection["title"]}
										</h1>
										<p className="contact-header-detail-text subTitle">
											{addressSection["subtitle"]}
										</p>
										<h1 className="address-heading-text">
											{phoneSection["title"]}
										</h1>
										<p className="contact-header-detail-text subTitle">
											{phoneSection["subtitle"]}
										</p>
										<div className="address-btn-div">
											<Button
												text="Visit on Google Maps"
												newTab={true}
												href={addressSection.location_map_link}
											/>
										</div>
									</div>
								</div>
							</Fade>
						</div>
						<Footer />
					</div>
				);
    }
}

export default Contact;