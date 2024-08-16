import Grid from '@mui/material/Grid';
import './New.css';
import HowCard1 from './HowCard1';
import img1 from './Asserts/static/howimg1.svg';
import img2 from './Asserts/static/howimg2.svg';
import img3 from './Asserts/static/howimg3.jpg';
import img4 from './Asserts/static/howimg4.jpg';
import img5 from './Asserts/static/howimg5.jpg';
import img6 from './Asserts/static/howimg6.jpg';
import img7 from './Asserts/static/howimg7.png';
import img8 from './Asserts/static/howimg8.jpg';
import './HowCard1.css';
import HowPara1 from './HowPara1';
import HowTop from './HowTop';
import HowButton from './HowButton';
import HowBorderBox from './HowBorderBox';
function New1(){
    return(
        <>
        <HowTop />
        <HowPara1 />
   <Grid container spacing={3} justifyContent="center">
   <Grid item xs={12} sm={6} md={3}>
   
   <HowCard1
        image={img1}
        title="Step 1: Sign Up"
        description="Begin your journey by registering on our platform. This involves providing basic information such as your name, email, and creating a password"
      />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>

      <HowCard1
        image={img2}
        title="Step 2: Email Verification"
        description="Once registered, you'll receive an email verification request. Click on the verification link in your email to confirm your registration and activate your account."
      />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>

      <HowCard1
        image={img3}
        title="Step 3: Payment and Access"
        description="To access the full range of features and opportunities, proceed to the payment page. Complete the payment process, unlocking exclusive access to the main registration page"
      />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>

      <HowCard1
        image={img4}
        title="Step 4: Profile Setup"
        description="On the main registration page, fill out a detailed profile. This includes personal and professional details, helping you stand out to potential employers. Your profile can be easily updated and modified in the user dashboard for ongoing optimization."
      />
    </Grid>
    </Grid>
    <Grid container spacing={3} justifyContent="center">
    <Grid item xs={12} sm={6} md={3}>
    <HowCard1
        image={img5}
        title="Step 5: Customize Interests and Skills"
        description="To personalize your profile, navigate to your dashboard and select 'Profile.'Next, click on 'Manage Your Account' followed by the 'Edit' option. From there, you can modify your areas of interest and talents to ensure accurate matching with job and internship opportunities, increasing the likelihood of finding the ideal fit."
      />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>

      <HowCard1
        image={img6}
        title="Step 6: Apply for Jobs/Internships"
        description="Explore the diverse range of positions available and apply for those that align with your career goals and internship aspirations. With just a single click, you can initiate the application process, and your details will be sent directly to the respective employers for consideration. Simplify your application process today!"
      />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>

      <HowCard1
        image={img7}
        title="Step 7: Interview Process"
        description="Receive notifications when your applications are approved, signaling the next step in your journey. Prepare for either the MCQ (Multiple Choice Questions) test, a comprehensive assessment of your skills and qualifications, or a direct face-to-face interview, depending on the specific requirements of the position and the company's selection process."
      />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
      <HowCard1
        image={img8}
        title="Step 8: Results"
        description="Access your test results through notifications, which will be available both in your dashboard and sent to your email. Congratulations on your successful completion! Following the notifications, we will keep you informed about the issuance of an offer letter, along with details about your joining date. We look forward to welcoming you to the team."
      />
    </Grid>
    </Grid>
    <div className="howbutton">
    <HowButton />
    </div>
    <div className="bordered-box">
    <HowBorderBox />
    </div>
    </>
    )
}
export default New1;
