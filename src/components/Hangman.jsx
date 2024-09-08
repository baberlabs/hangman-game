import frame1 from "../assets/images/1.png";
import frame2 from "../assets/images/2.png";
import frame3 from "../assets/images/3.png";
import frame4 from "../assets/images/4.png";
import frame5 from "../assets/images/5.png";
import frame6 from "../assets/images/6.png";
import frame7 from "../assets/images/7.png";
import frame8 from "../assets/images/8.png";
import frame9 from "../assets/images/9.png";
import frame10 from "../assets/images/10.png";

export default function Hangman({ frame }) {
    const frames = {
        1: frame1,
        2: frame2,
        3: frame3,
        4: frame4,
        5: frame5,
        6: frame6,
        7: frame7,
        8: frame8,
        9: frame9,
        10: frame10,
    };
    return (
        <img
            className="hangman-image"
            src={frames[frame]}
            alt="hangmanState"
        />
    );
}
