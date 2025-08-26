import Tabs from "./tabs";

function TabsParent() {

    const content = [
        {
            label: "Shinchan",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1ftI5oliT1PyhZWQpghu22J4IMdyGtu4ftw&s",
            content: "Ab main itna bhi kuch khaas nhi...",
        },
        {
            label: "Neni-Chan",
            url: "https://i.pinimg.com/736x/6a/2c/7f/6a2c7f393deadb34709051c59b0346c3.jpg",
            content: "Aj to hum ghar ghar hi khelenge...",
        },
        {
            label: "Toru Kazama",
            url: "https://pbs.twimg.com/profile_images/1265966056532856833/8I1xMGOS_200x200.jpg",
            content: "Meri english tution ka time hogaya hai...",
        },
        {
            label: "Masao Sato",
            url: "https://lh3.googleusercontent.com/t1WRnXtZDOJTWDfKWbEI7wscyTtbVrVulTQmQYdqGJDRGgZyTSeXOMsRtt9hYJG8Fek21GhiLY9ABXhpQETB8031yON5aFJ8FA=nu-e365-rj-q80-w925",
            content: "Ahaahaahhahaaaa mujhe dar lag raha hai...",
        },
        {
            label: "Bo-Chan",
            url: "https://pm1.aminoapps.com/7413/79d8179cdb4bd99bbca2a2cebb270b82e7b9dbefr1-985-554v2_hq.jpg",
            content: "Boooooooo, kitna sundar pathar hai...",
        },
        {
            label: "Shiro",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRebjyiZ9NVGanrU990eOi3DZKK2o_-6gA3peYU0ELiwuaLQi-d1sJhPiPmRENfkotMfLw&usqp=CAU",
            content: "Woff woff woff woff...",
        }
    ]

    function handleChange(currentTabIndex){
        console.log(currentTabIndex);
    }

    return (
        <Tabs tabContent={content} onChange={handleChange}/>
    );
}

export default TabsParent;