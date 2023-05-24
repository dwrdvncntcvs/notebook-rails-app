import scss from "./nbheader.module.scss";
import { HiOutlineBookOpen } from "react-icons/hi";

const NBHeader = () => {
    return (
        <header className={scss["nb-header"]}>
            <div className={scss["header-container"]}>
                <h1>
                    Noteb
                    <HiOutlineBookOpen />k
                </h1>
            </div>
        </header>
    );
};

export default NBHeader;
