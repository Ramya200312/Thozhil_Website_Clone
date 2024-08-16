import React from 'react';
import FaqCard from "./FaqCard";
import FaqTop from "./FaqTop";

function New2() {
    return (
        <>
            <FaqTop />
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              gap: '20px', 
              padding: '20px' 
            }}>
                <FaqCard 
                    heading="What is Thozhil and how does it work?"
                    description="Thozhil is an innovative online platform designed to connect talented individuals with exciting internship and job opportunities. Our platform utilizes cutting-edge algorithms to match candidates
                    with positions that align with their skills, qualifications, and career aspirations."
                />
                <FaqCard 
                    heading="What types of internships and jobs are available on Thozhil?"
                    description="Thozhil offers a diverse array of opportunities, ranging from internships to part-time and full-time positions.
                    Our platform spans various industries, including technology, finance, marketing, and more, catering to individuals at different stages of their careers."
                />
                <FaqCard 
                    heading="How can I sign up for an account on Thozhil?"
                    description="Signing up for Thozhil is a breeze! Simply visit our website, 
                    click on the 'Sign Up' button, and follow the prompts to create your account. Fill in some basic information and set up your profile to get started."
                />
                <FaqCard 
                    heading="Is Thozhil suitable for both internships and full-time positions?"
                    description="Absolutely! Thozhil caters to both individuals seeking valuable 
                    internship experiences and those looking for full-time positions to advance their careers."
                />
                <FaqCard 
                    heading="Is there a deadline for internship applications?"
                    description="Yes, each internship may have a different application deadline. Make sure to check the deadline 
                    for the specific internship you are interested in and submit your application before that date."
                />
                <FaqCard 
                    heading="How does Thozhil match candidates with suitable opportunities?"
                    description="Our platform employs an advanced matching algorithm that carefully analyses your profile, taking 
                    into account your skills, experience, and preferences. This ensures that you receive personalized recommendations tailored to 
                    your unique qualifications and career goals."
                />
                <FaqCard 
                    heading="Are there any fees associated with using Thozhil?"
                    description="Yes, Thozhil has a nominal registration fee to access our platform's comprehensive features and opportunities.
                    This fee helps us maintain the quality of our services and support a seamless experience for all users."
                />
                <FaqCard 
                    heading="How does the application process work on Thozhil?"
                    description="Applying is simple. Once you find a position of interest, click on 'Apply Now' and follow the instructions. 
                    You can also conveniently track your application status through your personalized dashboard."
                />
                <FaqCard 
                    heading="How does Thozhil ensure the quality and legitimacy of job postings?"
                    description="Thozhil is designed with a user-friendly interface, ensuring a seamless experience for 
                    both candidates and employers, facilitating easy navigation and interaction."
                />
                <FaqCard 
                    heading="How does Thozhil ensure a user-friendly experience for both candidates and employers?"
                    description="To maintain quality, we implement a rigorous vetting process for job postings. Our dedicated team
                    reviews each listing verify its authenticity and relevance before it is published on the platform."
                />
            </div>
        </>
    );
}

export default New2;
