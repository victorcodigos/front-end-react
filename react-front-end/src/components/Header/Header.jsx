import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext/UserState'
import { ProductsContext } from '../../context/ProductsContext/ProductsState'
import { UserDeleteOutlined, ProfileOutlined, LoginOutlined,ShoppingCartOutlined,HomeOutlined } from "@ant-design/icons"
import { Badge } from 'antd'
import "./Header.scss"

const Header = () => {
    const { token, logout } = useContext(UserContext)
    const { cart } = useContext(ProductsContext)
    const navigate = useNavigate()

    useEffect(() => {
        localStorage.setItem("cart",JSON.stringify(cart));
     }, [cart]);

    const logoutUser = () => {
        logout()
        navigate("/login")
    }
    return (
        <div className="header">
            <button><Link to="/home"> Home <HomeOutlined style={{ color: "#000", width: "20px" }}/></Link></button>
            {token ? (
                <>
                    <button><Link to="/profile"> Profile <ProfileOutlined style={{ color: "#000", width: "20px" }}/> </Link></button>
                    <button><Link to="/cart"> <Badge count={cart.length} shape="square" size="small" color="blue" style={{marginLeft:"17px"}}></Badge><ShoppingCartOutlined style={{ color: "#000", width: "30px" }}/> </Link></button>
                    <button onClick={logoutUser}> Logout <UserDeleteOutlined /></button>
                </>
            ) : (
                <button> <Link to="/login"> Login <LoginOutlined /></Link></button>
            )}


        </div>
    )
}

export default Header