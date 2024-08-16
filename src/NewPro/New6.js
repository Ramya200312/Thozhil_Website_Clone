import InternpartMiddle from "./InternpartMiddle";
import InternpartTop from "./InternpartTop";
import SearchBar1 from "./SearchBar1";

function New6(){
    const cardData2 = [
    
        {
            title: " Shama Institute Of Medical Sciences (SIMS)",
            heading: "Job Role:  Faculty (Physics & Chemistry)",
            para1: "Location: Bengaluru, KA",
            para2: "Salary: ₹ 1-2 LPA",
            con:"Part-time"
        },
        
        {
            title: "Nakshatra Automation",
            heading: "Job Role:Admin Cum Telecaller ",
            para1: "Location:Chennai, TN ",
            para2: "Salary: ₹ Pay to be determined later",
            con:"Part-time",
        },
        

        {
            title: "Yes Property",
            heading: "Job Role:Sales Manager",
            para1: "Chennai, TN",
            para2: "₹ Pay to be determined later",
            con:"Part-time"
        },
       
        {
            title: " Arvindbaloda.in",
            heading: "Job Role:Sales Trainer ",
            para1: "Location: Bengaluru, KA",
            para2: "Salary:₹ Pay to be determined later ",
            con:"Part-time"
        },
        //-----page1------//


        {
            title: "Stockarea",
            heading: "Job Role: Laravel Back-end Developer",
            para1: "Location: Chennai, TN",
            para2: "Salary: ₹ Pay to be determined later",
            con:"Part-time"
        },
        {
            title: "Stockarea",
            heading: "Job Role: Laravel Back-end Developer",
            para1: "Location: Chennai, TN",
            para2: "Salary: ₹ Pay to be determined later",
            con:"Part-time"
        },
        {
            title: "Stockarea",
            heading: "Job Role: Laravel Back-end Developer",
            para1: "Location: Chennai, TN",
            para2: "Salary: ₹ Pay to be determined later",
            con:"Part-time"
        },
        {
            title: "Stockarea",
            heading: "Job Role: Laravel Back-end Developer",
            para1: "Location: Chennai, TN",
            para2: "Salary: ₹ Pay to be determined later",
            con:"Part-time"
        },


      //-----page2-----//


        {
            title: "Stockarea",
            heading: "Job Role: Laravel Back-end Developer",
            para1: "Location: Chennai, TN",
            para2: "Salary: ₹ Pay to be determined later",
            con:"Full-time"
        },
        {
            title: "Stockarea",
            heading: "Job Role: Laravel Back-end Developer",
            para1: "Location: Chennai, TN",
            para2: "Salary: ₹ Pay to be determined later",
            con:"Full-time"
        },
        {
            title: "Stockarea",
            heading: "Job Role: Laravel Back-end Developer",
            para1: "Location: Chennai, TN",
            para2: "Salary: ₹ Pay to be determined later",
            con:"Full-time"
        },
        {
            title: "Stockarea",
            heading: "Job Role: Laravel Back-end Developer",
            para1: "Location: Chennai, TN",
            para2: "Salary: ₹ Pay to be determined later",
            con:"Full-time"
        },

    ];
    return(
        <>
        <InternpartTop />
        <SearchBar1 />
        <InternpartMiddle  data2={cardData2}/>
        </>
    )
}
export default New6;