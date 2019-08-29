import _ from 'lodash';
export const COLORS = {
    // primary : "#013665",
    // secondary : "#f16100",
    // background : "#eee",
    // button_gradient  : ['#013665','#eee']
    // text : "rgba(0,0,0,1)",
    // helper_text : "rgba(0,0,0,0.60)",
    // error_text : "#B00020",
    // active_icon : "rgba(0,0,0,0.87)",
    // inactive_icon : "rgba(0,0,0,0.60)",
    // inactive_icon : "rgba(0,0,0,0.60)",
    // disabled_icon : "rgba(0,0,0,0.38)"
    
    mainGradient: ['#fcfdff', '#e2e6fa', '#999fad'],
    secondGradient: ['#013665', '#e2e6fa', '#fcfdff'],
    thirdGradient: ['#2D518B', '#4368a5', '#6283bb'],
    main: '#013665',
    main_button : "#28a745",
    secondary: '#f16100',
    product_name : "#222",
    background: "#fff",
    bg_secondary : "#e0e0e0",
    red: '#ff4538',
    sale: "#ff4538",
    white: '#FFF',
    icon: "#aaa",
    notification: '#F94942',
    filledStar: '#f2b01e',
    favorite: '#ff4538',
    transparent: 'transparent',
    iconActive: '#555',
    iconTransparent: 'rgba(0,0,0,0.2)',
    half_white_bg: "#F6F6F6",
    light_gray: "#EFEFEF",
    main_text:"#222",
    text_dark: "#555555",
    text_light: '#FFF',
    text_mid: '#8b8b8b',
    disabled_icon: "#DFDFDF", // line_border
    placeholder: "#8B8B8B",
    disabled_text: "#8B8B8B",
    border: "#DFDFDF",
    home_layout: "#DFDFDF",
    facebook: "#3b5998",
    google: "#d34836",
    header_titles_icons: "#FFF",
    menu_level1: "#EBEBEB",
    menu_level2: "#F2F2F2",
    menu_level3: "#F7F7F7",
    shadow: "#000"
};


export const setColors = (newColors) => {
    _.assign(COLORS, newColors);
};