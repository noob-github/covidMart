import React from "react"
// import { Layout, Menu, Slider, Dropdown, Divider, Row, Col, Radio } from "antd";
// import "../App.css"
import { Component } from "react"
import logo from "../assets/images/CovidMart logo no background.png"
//import styles from "./navbar.module.css"
import { Link } from 'react-router-dom';
import { useState } from "react";
//import { MenuOutlined, ArrowLeftOutlined, UserOutlined, ShoppingOutlined } from "@ant-design/icons"

// const { Header, Sider } = Layout;
// const { SubMenu } = Menu;


function Navbar(props){
    // const [collapsed,setCollapsed] = useState(true)
    // const [price,setPrice] = useState(10000)
    // const [showPopup,setShowPopup] = useState(false)
    // const [category,setCategory] = useState("all")

    function toggleUserPopup(){
        let popup = document.getElementById("popup")
        if (popup.style.visibility === "hidden"||popup.style.visibility===""){
            popup.style.visibility = "visible";
        }
        else{
            popup.style.visibility = "hidden"
        }
        // let h4a = document.querySelector("#popup h4 a")
    }

    function slideSidebar(){
        let sidebar = document.getElementById("sidebar")
        sidebar.style.visibility = "visible"
    }

    /*render() {
        // this.props.applyFilter(this.state.price,this.state.category)
        const menu = (
            <Menu style={{ border: "0.2px solid #434343", width: "100%", marginRight: "30px" }}>
                <Menu.Item>
                    <Link to="/auth" onClick={() => {
                        localStorage.clear();
                    }}><span className={styles.ddlink}>Logout</span></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/cart" ><span className={styles.ddlink}>Cart</span></Link>
                </Menu.Item>
            </Menu>
        )
        return (
            <Layout style={{ backgroundColor: "white", width: "40vw" }}>
                <Sider collapsedWidth={0} style={{ zIndex: "2", position: "fixed" }} collapsed={this.state.collapsed} trigger={null} collapsible>
                    <div className="brand" style={{ textAlign: "center", fontSize: "2em", height: "30px", backgroundColor: "white" }}>Filter</div>
                    <Divider />
                    <Menu theme="light" mode="inline">
                        <SubMenu title="Filter By Price">
                            <Menu.Item key="1">
                                <Row style={{ width: "100%" }}>
                                    <Col span={16}>
                                        <Slider value={this.state.price} tipFormatter={null} onChange={(value) => {
                                            this.props.toggleBool(false)
                                            this.setState({ price: value })
                                            this.props.applyFilterPrice(value)
                                        }} min={100} max={10000} />
                                    </Col>
                                    <Col span={8}>
                                        <input value={this.state.price} />
                                    </Col>
                                </Row>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu title="Filter By Category">
                            {// <Menu.Item key="2">Masks</Menu.Item>
                            <Menu.Item key="3">PPE kit</Menu.Item> //}
                            <Radio.Group onChange={(e) => {
                                this.props.toggleBool(false)
                                let category = e.target.value;
                                this.setState({category:category})
                                this.props.applyFilterCategory(category)
                            }}>
                                <br />
                                <Radio value={"all"}>
                                    All
                                </Radio>
                                <br />
                                <Radio value={"masks"}>
                                    Masks
                                </Radio>
                                <br />
                                <Radio value={"ppekit"}>
                                    PPE-Kit
                                </Radio>
                                <br />
                                <Radio value={"gloves"}>
                                    Gloves
                                </Radio>
                                <br />
                                <Radio value={"disinfectant"}>
                                    Disinfectant
                                </Radio>
                                <br />
                                <Radio value={"sanitizer"}>
                                    Sanitizer
                                </Radio>
                                <br />
                                <Radio value={"thermometer"}>
                                    Thermometer
                                </Radio>
                                <br />
                                <Radio value={"other"}>
                                    Other
                                </Radio>
                                <br />
                            </Radio.Group>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout>
                    <div id="hider" className={styles.nav} >
                        <Header className="navHeader" style={{ borderBottom: "4px solid #1890ff" }}>
                            {this.state.collapsed ? <MenuOutlined className="menuicon" onClick={() => { this.toggle(); this.setState({ bool: false }) }} /> : <ArrowLeftOutlined className="arrowicon" onClick={() => { this.toggle(); this.setState({ bool: true }) }} />}
                            <div style={{ position: "relative", display: "inline-block", fontSize: "3em", paddingBottom: "4px", color: "#1890ff" }}><b>CovidMart<ShoppingOutlined /> </b></div>
                            <Dropdown arrow placement="bottomCenter" overlay={menu}><UserOutlined className="usericon" /></Dropdown>
                        </Header>
                    </div>
                </Layout>
            </Layout>

        )
    }*/

    return (
        <section id="navbar">
            {/* <div><i className="fa fa-bars"></i></div> */}
            <div>
                <i className="fa-solid fa-bars" onClick={slideSidebar}></i>
            </div>
           
            <h1 className="brand"><Link to="/">CovidMart</Link><img src={logo} alt="logo" /> </h1>
            
            <div>
                <input type="text"></input>
                <i className="fa fa-user" onClick={toggleUserPopup}></i>
            </div>
        </section>
    )
}

export default Navbar;
