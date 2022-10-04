import './nav.css'

const Nav = () =>{
    return (
        <>
            <nav>
                <input type="checkbox" id="check"/>
                <label htmlFor="check" className='checkbtn'>
                    <i className='fas fa-bars'></i>
                </label>
                <label htmlFor="" className="logo">DesignX</label>
                <ul>
                    <li><a className='active' href="www">Home</a></li>
                    <li><a href="www">About</a></li>
                    <li><a href="www">Services</a></li>
                    <li><a href="www">Contact</a></li>
                    <li><a href="www">Feedback</a></li>
                </ul>
            </nav>
            <section></section>
        </>
    );
};

export default Nav;
