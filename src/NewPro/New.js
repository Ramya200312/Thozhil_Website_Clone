import React, { useState } from "react";
import Grid from '@mui/material/Grid';
import './New.css';
import Top from './Top';
import mainLogo from'./Asserts/static/img1.jpeg';
import main2Logo from'./Asserts/static/img2.jpeg';
import main3Logo from'./Asserts/static/img3.jpeg';
import MediaCard from "./MediaCard";
import Card2 from "./Card2";
import Para2 from "./Para2";
import card2img1 from './Asserts/static/card2img1.svg';
import LastPara from "./LastPara";
import Para4 from "./Para4";
import CustomCard from "./CustomCard";
import img4 from './Asserts/static/img4.jpeg';
import img5 from './Asserts/static/img5.jpeg';
import img6 from './Asserts/static/img6.jpeg';
import img7 from './Asserts/static/img7.jpeg';
import img8 from './Asserts/static/img8.jpeg';
import img9 from './Asserts/static/img9.jpeg';
import img10 from './Asserts/static/img10.jpeg';
import img11 from './Asserts/static/img11.jpeg';
import BorderBox from "./BorderBox";
import SwiperComponent from "./SwiperComponent";
function New(){
return(
  <>
        <Top />
        <div className="center">
            <h2> The Reality Of<span> Starting Your Career</span> </h2>
            <div className="kl"><hr class="custom-dashes" />      <hr class="custom-dashes" /></div>     

              <p>
                "Embarking on your career journey? Thozhil unveils the realities with you. 
                Trust our commitment for a seamless start, turning your career dreams into a tangible reality. 
                With Thozhil, step into a future filled with purpose and confidence!"
              </p>
        </div>
    <Grid container spacing={3} justifyContent="center">
    <Grid item xs={12} sm={4} md={4}>
    <MediaCard  
    title="Efficiency Enhancing"
    image={mainLogo}
    description="Save Time with Thozhil! Streamline your journey to success. Let Thozhil handle the details,
         so you can focus on what truly matters – building your future!"
    />
     </Grid>
     <Grid item xs={12} sm={4} md={4}>
    <MediaCard  
    title="Complete Flexibility"
    image={main2Logo}
    description="Tailor your career path on your terms. 
    Empower yourself with choices, ensuring your journey to success is uniquely yours."
    />
     </Grid>
     <Grid item xs={12} sm={4} md={4}>
    <MediaCard 
    title="Guaranteed placement"
    image={main3Logo}
    description="Guaranteed Placement Excellence! Secure your future with Thozhil.
     Our commitment ensures your success – a promise fulfilled in every career step."
    />
    </Grid>
    </Grid>
    <Para2 />

    <div style={{display:"flex"}}>
    <Grid container spacing={3}  >
    <Grid item xs={12} sm={8} md={4}>

    <Card2 
        title="Define Your Goals"
        description="Thozhil offers opportunities for job seekers and employers to achieve career goals through placements and internships.
        Our platform makes it easy to define and pursue objectives. With Thozhil, explore, connect, and succeed."
    />
     <Card2 
          title="Fixing Issues"
          description="Encountered a problem? We've got you covered. Our dedicated support team is committed to swiftly resolving issues and ensuring your experience is seamless. 
          Trust us to fix any concerns, so you can focus on what matters most – your success."
    />
    </Grid>
    
    <Grid item xs={12} sm={4} md={4}>

     <Card2 
          title="24/7 Support and Assistance"
          description="Thozhil ensures you have assistance whenever needed, whether navigating the platform, with questions, or needing immediate help.
          Your success is our priority, and we're here 24/7 to support you."
        />
     <Card2 
          title="Co-Development"
          description="Embark on a journey of collaborative innovation with Thozhil's Co-Development services.
          Here, we merge your unique ideas with our expertise to create impactful solutions, ensuring shared success.
          Join us in shaping a future where innovation knows no bounds."
     />
    </Grid>
    </Grid>
    <Grid  justifyContent="center">
    <div className='card2img'>
      <img src={card2img1} />
    </div>
    </Grid>
    </div>
   <Para4 />
   <SwiperComponent />
   <LastPara />

   <Grid container spacing={3} justifyContent="center">
   <Grid item xs={12} sm={6} md={3}>
   
   <CustomCard
        image={img4}
        heading1="Step 1"
        heading2="Account Creation"
        content="Start your journey now by signing up, 
        unlocking personalized opportunities and resources just for you."
      />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>

      <CustomCard
        image={img5}
        heading1="Step 2"
        heading2="Customize Your Profile"
        content="Easily tailor your profile by editing skills and 
        area of interest to match desired opportunities on this platform."
      />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>

      <CustomCard
        image={img6}
        heading1="Step 3"
        heading2="Easy Application Process"
        content="Apply to job and internship opportunities effortlessly with just
        a click on the Apply Now button."
      />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>

      <CustomCard
        image={img7}
        heading1="Step 4"
        heading2="Timely Notifications"
        content="Receive timely email notifications, ensuring you're always informed and
        up-to-date with the latest developments."
      />
    </Grid>
    </Grid>
    <Grid container spacing={3} justifyContent="center">
    <Grid item xs={12} sm={6} md={3}>
    <CustomCard
        image={img8}
        heading1="Step 5"
        heading2="Easy Dashboard Access"
        content="Quickly access everything conveniently and efficiently
        from your personalized dashboard interface."
      />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>

      <CustomCard
        image={img9}
        heading1="Step 6"
        heading2="Assessment Process"
        content="Please ensure you are adequately prepared for the upcoming MCQ test."
      />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>

      <CustomCard
        image={img10}
        heading1="Step 7"
        heading2="F2F Process"
        content="Approach direct interview through our portal with assurance and self-assurance."
      />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
      <CustomCard
        image={img11}
        heading1="Step 8"
        heading2="Offer Releases"
        content="Receive official offer letters and joining dates seamlessly via email and dashboard notifications."
      />
    </Grid>
    </Grid>
    <div>
    <BorderBox />
    </div>
</>
  );
};
     
   export default New;


