import scss from "./nbnav.module.scss";

const NBNav = () => {
    return (
        <nav className={scss['nav-container']}>
            <div className={scss["notebook-nav"]}>Nav</div>
            <div className={scss["actions-container"]}>
                <button>Add</button>
            </div>
        </nav>
    );
};

export default NBNav;
