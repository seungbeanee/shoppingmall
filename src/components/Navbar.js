import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

const Navbar = ({authenticate, setAuthenticate}) => {
    const menuList = [
                        {
                            id:0,
                            menu:'여성',
                        },
                        {
                            id:1,
                            menu:'Divided',
                        },
                        {
                            id:2,
                            menu:'남성',
                        },
                        {
                            id:3,
                            menu:'신생아/유아',
                        },
                        {
                            id:4,
                            menu:'아동',
                        },
                        {
                            id:5,
                            menu:'Home',
                        },
                        {
                            id:6,
                            menu:'Sale',
                        },
                    ];
        
        const navigate = useNavigate();

        const goHome = () => {
            navigate("/")
        }
        
        const search = (e) => {
            if(e.key === "Enter"){
                let keyword = e.target.value;
                navigate(`/?q=${keyword}`);
            }
        }
    return (
        <div>
            {authenticate === false?(
                <div className="login-button" onClick={() => navigate("/login")}>
                    <FontAwesomeIcon icon={faUser} />
                    <div>로그인</div>
                </div>
            ) : (
                <div className="login-button" onClick={() => setAuthenticate(false)}>
                    <FontAwesomeIcon icon={faUser} />
                    <div>로그아웃</div>
                </div>
            )}
            
            <div className="nav-section" onClick={goHome}>
                <img width={100} src="https://cdn-icons-png.flaticon.com/512/469/469962.png" alt=''/>
            </div>
            <div className="menu-area">
                <ul className="menu-list">
                    {menuList.map((menu) => (
                        <li key={menu.id}>{menu.menu}</li>
                    ))}
                </ul>
                <div className="search-bar">
                    <FontAwesomeIcon icon={faSearch} />
                    <input type="text" onKeyDown={(e)=>search(e)}/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;