import PartMiddle from "./PartMiddle";
import PartTop from "./PartTop";
import SearchBar from "./SearchBar";

function New4(){
    const cardData1 = [
    
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
        <PartTop />
        <SearchBar />
        <PartMiddle data1={cardData1} />
        </>
    )
}
export default New4;