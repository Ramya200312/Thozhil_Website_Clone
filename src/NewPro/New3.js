import FullMiddle from "./FullMiddle";
import FullTop from "./FullTop";
import SearchBar from "./SearchBar";

function New3(){
    const cardData = [
        {
            title: "WeMakeScholars",
            heading: "Job Role: Financial Loan Operator",
            para1: "Location: Chennai, TN",
            para2: "Salary: ₹ Earnings discussed during interview",
            con:"Full-time"
        },
        
        {
            title: "Stockarea",
            heading: "Job Role: Laravel Back-end Developer",
            para1: "Location: Chennai, TN",
            para2: "Salary: ₹ Pay to be determined later",
            con:"Full-time",
        },
        
        {
            title: "Truzillion Platforms Private Limited",
            heading: "Job Role:Software Developer",
            para1: "Chennai, TN",
            para2: "₹ Pay to be determined later",
            con:"Full-time"
        },
        
        {
            title: "FullThrottle Labs",
            heading: "Job Role: Business Development Associate",
            para1: "Location: Chennai, TN",
            para2: "Salary:₹ Pay to be determined later ",
            con:"Full-time"
        },
        //-----page1------//


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
       <FullTop />
       <SearchBar />
       <FullMiddle data={cardData} /> 
       </>
    )
}
export default New3;