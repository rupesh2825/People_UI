import { Bell } from 'lucide-react';
function Navbar() {
    return (
        <>
            <nav className="d-flex p-2 bg-light">
                <h1 className="me-auto">PEOPLE.CO</h1>
                <div className="d-flex ms-auto gap-3">
                    <Bell style={{cursor: 'pointer',marginTop:'10px'}} />
                    <img style={{borderRadius: '100%'}} src="" alt="profile" />
                    <h4>user name</h4>
                </div>
            </nav>
        </>
    )
}

export default Navbar;