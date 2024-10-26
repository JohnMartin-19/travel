import React from "react";
import {
	Box,
	FooterContainer,
	Row,
	Column,
	FooterLink,
	Heading,
} from "./FooterStyles";

function Footer(){
	return (
		<Box>
			<h1
				style={{
					color: "#294B29",
					textAlign: "center",
					marginTop: "10px",
				}}
			>
				    Y B N A
			</h1>
            <br />
            <br />
			<FooterContainer>
				<Row>
					<Column>
						<Heading>About Us</Heading>
						<FooterLink src="/src/components/AboutUs.jsx">
							Aim
						</FooterLink>
						<FooterLink href="#">
							Mision
						</FooterLink>
						<FooterLink href="#">
							Testimonials
						</FooterLink>
					</Column>
					<Column>
						<Heading>Services</Heading>
						<FooterLink src='/src/components/Services.jsx'>
							Empowering Young Expeditors
						</FooterLink>
						<FooterLink src="/src/components/community.jsx">
							Supporting Local Talent
						</FooterLink>
						<FooterLink href="#">
							Cutura Experiences
						</FooterLink>
						
					</Column>
					<Column>
						<Heading>Contact Us</Heading>
						<FooterLink href="#">
							Mburu
						</FooterLink>
						<FooterLink href="#">
							Ezra
						</FooterLink>
						<FooterLink href="#">
							Kimani
						</FooterLink>
						<FooterLink href="#">
							Mahinda
						</FooterLink>
					</Column>
					<Column>
						<Heading>Social Media</Heading>
						<FooterLink href="#">
							<i className="fab fa-facebook-f">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									Facebook
								</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-instagram">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									Instagram
								</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-twitter">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									Twitter
								</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-youtube">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									Youtube
								</span>
							</i>
						</FooterLink>
					</Column>
				</Row>
			</FooterContainer>
            <div className="cc" style={{color:'#294B29',textAlign: "center",
					marginTop: "20px"}}>&copy;- Y B N A -2024</div>
		</Box>
	);
};
export default Footer;
