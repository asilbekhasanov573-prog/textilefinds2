fetch("https://fakestoreapi.com/products")
.then(response => response.json())
.then(json => {
    var img1 = document.getElementById("img1");
    var a1 = document.getElementById("a1");
    var as1 = document.getElementById("as1")
    var asp1 = document.getElementById("asp1")
    var aspp1 = document.getElementById("aspp1")
    var iq1 = document.getElementById("iq1")

    img1.setAttribute("src", json[0].image);
    img1.style.width = "100%"
    img1.style.height = "20vh"
    a1.textContent = json[0].description;
    a1.style.color = ("black")
    as1.textContent = json[0].price;
    as1.style.marginTop = ("20px")
    asp1.textContent = json[0].category;
    asp1.style.marginTop = ("-20px")
    aspp1.textContent = json[0].rating.rate;
    aspp1.style.marginTop = ("-20px")
    iq1.textContent = json[0].title;
    iq1.style.color = ("black")

    var img2 = document.getElementById("img2");
    var a2 = document.getElementById("a2");
    var as2 = document.getElementById("as2")
    var asp2 = document.getElementById("asp2")
    var aspp2 = document.getElementById("aspp2")
    var iq2 = document.getElementById("iq2")

    img2.setAttribute("src", json[1].image);
    img2.style.width = "100%"
    img2.style.height = "20vh"
    a2.textContent = json[1].description;
    a2.style.color = ("black")
    a2.style.fontSize = ("6px")
    as2.textContent = json[1].price;
    as2.style.marginTop = ("20px")
    asp2.textContent = json[1].category;
    asp2.style.marginTop = ("-20px")
    aspp2.textContent = json[1].rating.rate;
    aspp2.style.marginTop = ("-20px")
    iq2.textContent = json[1].title;
    iq2.style.color = ("black")

    var img3 = document.getElementById("img3");
    var a3 = document.getElementById("a3");
    var as3 = document.getElementById("as3")
    var asp3 = document.getElementById("asp3")
    var aspp3 = document.getElementById("aspp3")
    var iq3 = document.getElementById("iq3")

    img3.setAttribute("src", json[2].image);
    img3.style.width = "100%"
    img3.style.height = "20vh"
    a3.textContent = json[2].description;
    a3.style.color = ("black")
    a3.style.fontSize = ("6px")
    as3.textContent = json[2].price;
    as3.style.marginTop = ("20px")
    asp3.textContent = json[2].category;
    asp3.style.marginTop = ("-20px")
    aspp3.textContent = json[2].rating.rate;
    aspp3.style.marginTop = ("-20px")
    iq3.textContent = json[2].title;
    iq3.style.color = ("black")

    var img4 = document.getElementById("img4");
    var a4 = document.getElementById("a4");
    var as4 = document.getElementById("as4")
    var asp4 = document.getElementById("asp4")
    var aspp4 = document.getElementById("aspp4")
    var iq4 = document.getElementById("iq4")

    img4.setAttribute("src", json[3].image);
    img4.style.width = "100%"
    img4.style.height = "20vh"
    a4.textContent = json[3].description;
    a4.style.color = ("black")
    a4.style.fontSize = ("8px")
    as4.textContent = json[3].price;
    as4.style.marginTop = ("20px")
    asp4.textContent = json[3].category;
    asp4.style.marginTop = ("-20px")
    aspp4.textContent = json[3].rating.rate;
    aspp4.style.marginTop = ("-20px")
    iq4.textContent = json[3].title;
    iq4.style.color = ("black")

    var img5 = document.getElementById("img5");
    var a5 = document.getElementById("a5");
    var as5 = document.getElementById("as5")
    var asp5 = document.getElementById("asp5")
    var aspp5 = document.getElementById("aspp5")
    var iq5 = document.getElementById("iq5")

    img5.setAttribute("src", json[4].image);
    img5.style.width = "100%"
    img5.style.height = "20vh"
    a5.textContent = json[4].description;
    a5.style.color = ("black")
    a5.style.fontSize = ("8px")
    as5.textContent = json[4].price;
    as5.style.marginTop = ("20px")
    asp5.textContent = json[4].category;
    asp5.style.marginTop = ("-20px")
    aspp5.textContent = json[4].rating.rate;
    aspp5.style.marginTop = ("-20px")
    iq5.textContent = json[4].title;
    iq5.style.color = ("black")

    var img6 = document.getElementById("img6");
    var a6 = document.getElementById("a6");
    var as6 = document.getElementById("as6")
    var asp6 = document.getElementById("asp6")
    var aspp6 = document.getElementById("aspp6")
    var iq6 = document.getElementById("iq6")

    img6.setAttribute("src", json[5].image);
    img6.style.width = "100%"
    img6.style.height = "20vh"
    a6.textContent = json[5].description;
    a6.style.color = ("black")
    a6.style.fontSize = ("10px")
    as6.textContent = json[5].price;
    as6.style.marginTop = ("20px")
    asp6.textContent = json[5].category;
    asp6.style.marginTop = ("-20px")
    aspp6.textContent = json[5].rating.rate;
    aspp6.style.marginTop = ("-20px")
    iq6.textContent = json[5].title;
    iq6.style.color = ("black")

    var img7 = document.getElementById("img7");
    var a7 = document.getElementById("a7");
    var as7 = document.getElementById("as7")
    var asp7 = document.getElementById("asp7")
    var aspp7 = document.getElementById("aspp7")
    var iq7 = document.getElementById("iq7")

    img7.setAttribute("src", json[6].image);
    img7.style.width = "100%"
    img7.style.height = "20vh"
    a7.textContent = json[6].description;
    a7.style.color = ("black")
    a7.style.fontSize = ("12px")
    as7.textContent = json[6].price;
    as7.style.marginTop = ("20px")
    asp7.textContent = json[6].category;
    asp7.style.marginTop = ("-20px")
    aspp7.textContent = json[6].rating.rate;
    aspp7.style.marginTop = ("-20px")
    iq7.textContent = json[6].title;
    iq7.style.color = ("black")

    var img8 = document.getElementById("img8");
    var a8 = document.getElementById("a8");
    var as8 = document.getElementById("as8")
    var asp8 = document.getElementById("asp8")
    var aspp8 = document.getElementById("aspp8")
    var iq8 = document.getElementById("iq8")

    img8.setAttribute("src", json[7].image);
    img8.style.width = "100%"
    img8.style.height = "20vh"
    a8.textContent = json[7].description;
    a8.style.color = ("black")
    a8.style.fontSize = ("15px")
    as8.textContent = json[7].price;
    as8.style.marginTop = ("20px")
    asp8.textContent = json[7].category;    
    asp8.style.marginTop = ("-20px")
    aspp8.textContent = json[7].rating.rate;
    aspp8.style.marginTop = ("-20px")
    iq8.textContent = json[7].title;
    iq8.style.color = ("black")

    var img9 = document.getElementById("img9");
    var a9 = document.getElementById("a9");
    var as9 = document.getElementById("as9")
    var asp9 = document.getElementById("asp9")
    var aspp9 = document.getElementById("aspp9")
    var iq9 = document.getElementById("iq9")
    
    img9.setAttribute("src", json[8].image);
    img9.style.width = "100%"
    img9.style.height = "20vh"
    a9.textContent = json[8].description;
    a9.style.color = ("black")
    a9.style.fontSize = ("5px")
    as9.textContent = json[8].price;
    as9.style.marginTop = ("20px")
    asp9.textContent = json[8].category;    
    asp9.style.marginTop = ("-20px")
    aspp9.textContent = json[8].rating.rate;
    aspp9.style.marginTop = ("-20px")
    iq9.textContent = json[8].title;
    iq9.style.color = ("black")


    var img10 = document.getElementById("img10");
    var a10 = document.getElementById("a10");
    var as10 = document.getElementById("as10")
    var asp10 = document.getElementById("asp10")
    var aspp10 = document.getElementById("aspp10")
    var iq10 = document.getElementById("iq10")

    img10.setAttribute("src", json[9].image);
    img10.style.width = "100%"
    img10.style.height = "20vh"
    a10.textContent = json[9].description;
    a10.style.color = ("black")
    a10.style.fontSize = ("4px")
    as10.textContent = json[9].price;
    as10.style.marginTop = ("20px")
    asp10.textContent = json[9].category;    
    asp10.style.marginTop = ("-20px")
    aspp10.textContent = json[9].rating.rate;
    aspp10.style.marginTop = ("-20px")
    iq10.textContent = json[9].title;
    iq10.style.color = ("black")

    var img11 = document.getElementById("img11");
    var a11 = document.getElementById("a11");
    var as11 = document.getElementById("as11")
    var asp11 = document.getElementById("asp11")
    var aspp11 = document.getElementById("aspp11")
    var iq11 = document.getElementById("iq11")

    img11.setAttribute("src", json[10].image);
    img11.style.width = "100%"
    img11.style.height = "20vh"
    a11.textContent = json[10].description;
    a11.style.color = ("black")
    a11.style.fontSize = ("3px")
    as11.textContent = json[10].price;
    as11.style.marginTop = ("20px")
    asp11.textContent = json[10].category;    
    asp11.style.marginTop = ("-20px")
    aspp11.textContent = json[10].rating.rate;
    aspp11.style.marginTop = ("-20px")
    iq11.textContent = json[10].title;
    iq11.style.color = ("black")

    var img12 = document.getElementById("img12");
    var a12 = document.getElementById("a12");
    var as12 = document.getElementById("as12")
    var asp12 = document.getElementById("asp12")
    var aspp12 = document.getElementById("aspp12")
    var iq12 = document.getElementById("iq12")

    img12.setAttribute("src", json[11].image);
    img12.style.width = "100%"
    img12.style.height = "20vh"
    a12.textContent = json[11].description;
    a12.style.color = ("black")
    a12.style.fontSize = ("10px")
    as12.textContent = json[11].price;
    as12.style.marginTop = ("20px")
    asp12.textContent = json[11].category;    
    asp12.style.marginTop = ("-20px")
    aspp12.textContent = json[11].rating.rate;
    aspp12.style.marginTop = ("-20px")
    iq12.textContent = json[11].title;
    iq12.style.color = ("black")

    var img13 = document.getElementById("img13");
    var a13 = document.getElementById("a13");
    var as13 = document.getElementById("as13")
    var asp13 = document.getElementById("asp13")
    var aspp13 = document.getElementById("aspp13")
    var iq13 = document.getElementById("iq13")

    img13.setAttribute("src", json[12].image);
    img13.style.width = "100%"
    img13.style.height = "20vh"
    a13.textContent = json[12].description;
    a13.style.color = ("black")
    a13.style.fontSize = ("4px")
    as13.textContent = json[12].price;
    as13.style.marginTop = ("20px")
    asp13.textContent = json[12].category;    
    asp13.style.marginTop = ("-20px")
    aspp13.textContent = json[12].rating.rate;
    aspp13.style.marginTop = ("-20px")
    iq13.textContent = json[12].title;
    iq13.style.color = ("black")

    var img14 = document.getElementById("img14");
    var a14 = document.getElementById("a14");
    var as14 = document.getElementById("as14")
    var asp14 = document.getElementById("asp14")
    var aspp14 = document.getElementById("aspp14")
    var iq14 = document.getElementById("iq14")

    img14.setAttribute("src", json[13].image);
    img14.style.width = "100%"
    img14.style.height = "20vh"
    a14.textContent = json[13].description;
    a14.style.color = ("black")
    a14.style.fontSize = ("2px")
    as14.textContent = json[13].price;
    as14.style.marginTop = ("20px")
    asp14.textContent = json[13].category;    
    asp14.style.marginTop = ("-20px")
    aspp14.textContent = json[13].rating.rate;
    aspp14.style.marginTop = ("-20px")
    iq14.textContent = json[13].title;
    iq14.style.color = ("black")

    var img15 = document.getElementById("img15");
    var a15 = document.getElementById("a15");
    var as15 = document.getElementById("as15")
    var asp15 = document.getElementById("asp15")
    var aspp15 = document.getElementById("aspp15")
    var iq15 = document.getElementById("iq15")

    img15.setAttribute("src", json[14].image);
    img15.style.width = "100%"
    img15.style.height = "20vh"
    a15.textContent = json[14].description;
    a15.style.color = ("black")
    a15.style.fontSize = ("2px")
    as15.textContent = json[14].price;
    as15.style.marginTop = ("20px")
    asp15.textContent = json[14].category;    
    asp15.style.marginTop = ("-20px")
    aspp15.textContent = json[14].rating.rate;
    aspp15.style.marginTop = ("-20px")
    iq15.textContent = json[14].title;
    iq15.style.color = ("black")

    var img16 = document.getElementById("img16");
    var a16 = document.getElementById("a16");
    var as16 = document.getElementById("as16")
    var asp16 = document.getElementById("asp16")
    var aspp16 = document.getElementById("aspp16")
    var iq16 = document.getElementById("iq16")

    img16.setAttribute("src", json[15].image);
    img16.style.width = "100%"
    img16.style.height = "20vh"
    a16.textContent = json[15].description;
    a16.style.color = ("black")
    a16.style.fontSize = ("4px")
    as16.textContent = json[15].price;
    as16.style.marginTop = ("20px")
    asp16.textContent = json[15].category;    
    asp16.style.marginTop = ("-20px")
    aspp16.textContent = json[15].rating.rate;
    aspp16.style.marginTop = ("-20px")
    iq16.textContent = json[15].title;
    iq16.style.color = ("black")

    var img17 = document.getElementById("img17");
    var a17 = document.getElementById("a17");
    var as17 = document.getElementById("as17")
    var asp17 = document.getElementById("asp17")
    var aspp17 = document.getElementById("aspp17")
    var iq17 = document.getElementById("iq17")

    img17.setAttribute("src", json[16].image);
    img17.style.width = "100%"
    img17.style.height = "20vh"
    a17.textContent = json[16].description;
    a17.style.color = ("black")
    a17.style.fontSize = ("4px")
    as17.textContent = json[16].price;
    as17.style.marginTop = ("20px")
    asp17.textContent = json[16].category;    
    asp17.style.marginTop = ("-20px")
    aspp17.textContent = json[16].rating.rate;
    aspp17.style.marginTop = ("-20px")
    iq17.textContent = json[16].title;
    iq17.style.color = ("black")

    var img18 = document.getElementById("img18");
    var a18 = document.getElementById("a18");
    var as18 = document.getElementById("as18")
    var asp18 = document.getElementById("asp18")
    var aspp18 = document.getElementById("aspp18")
    var iq18 = document.getElementById("iq18")

    img18.setAttribute("src", json[17].image);
    img18.style.width = "100%"
    img18.style.height = "20vh"
    a18.textContent = json[17].description;
    a18.style.color = ("black")
    a18.style.fontSize = ("7px")
    as18.textContent = json[17].price;
    as18.style.marginTop = ("20px")
    asp18.textContent = json[17].category;    
    asp18.style.marginTop = ("-20px")
    aspp18.textContent = json[17].rating.rate;
    aspp18.style.marginTop = ("-20px")
    iq18.textContent = json[17].title;
    iq18.style.color = ("black")


    var img19 = document.getElementById("img19");
    var a19 = document.getElementById("a19");
    var as19 = document.getElementById("as19")
    var asp19 = document.getElementById("asp19")
    var aspp19 = document.getElementById("aspp19")
    var iq19 = document.getElementById("iq19")

    img19.setAttribute("src", json[18].image);
    img19.style.width = "100%"
    img19.style.height = "20vh"
    a19.textContent = json[18].description;
    a19.style.color = ("black")
    a19.style.fontSize = ("4px")
    as19.textContent = json[18].price;
    as19.style.marginTop = ("20px")
    asp19.textContent = json[18].category;    
    asp19.style.marginTop = ("-20px")
    aspp19.textContent = json[18].rating.rate;
    aspp19.style.marginTop = ("-20px")
    iq19.textContent = json[18].title;
    iq19.style.color = ("black")

    var img20 = document.getElementById("img20");
    var a20 = document.getElementById("a20");
    var as20 = document.getElementById("as20")
    var asp20 = document.getElementById("asp20")
    var aspp20 = document.getElementById("aspp20")
    var iq20 = document.getElementById("iq20")

    img20.setAttribute("src", json[19].image);
    img20.style.width = "100%"
    img20.style.height = "20vh"
    a20.textContent = json[19].description;
    a20.style.color = ("black")
    a20.style.fontSize = ("4px")
    as20.textContent = json[19].price;
    as20.style.marginTop = ("20px")
    asp20.textContent = json[19].category;    
    asp20.style.marginTop = ("-20px")
    aspp20.textContent = json[19].rating.rate;
    aspp20.style.marginTop = ("-20px")
    iq20.textContent = json[19].title;
    iq20.style.color = ("black")

    var img21 = document.getElementById("img21");
    var a21 = document.getElementById("a21");
    var as21 = document.getElementById("as21")
    var asp21 = document.getElementById("asp21")
    var aspp21 = document.getElementById("aspp21")
    var iq21 = document.getElementById("iq21")

    img21.setAttribute("src", json[0].image);
    img21.style.width = "100%"
    img21.style.height = "20vh"
    a21.textContent = json[0].description;
    a21.style.color = ("black")
    a21.style.fontSize = ("7px")
    as21.textContent = json[0].price;
    as21.style.marginTop = ("20px")
    asp21.textContent = json[0].category;    
    asp21.style.marginTop = ("-20px")
    aspp21.textContent = json[0].rating.rate;
    aspp21.style.marginTop = ("-20px")
    iq21.textContent = json[0].title;
    iq21.style.color = ("black")
 
    var img22 = document.getElementById("img22");
    var a22 = document.getElementById("a22");
    var as22 = document.getElementById("as22")
    var asp22 = document.getElementById("asp22")
    var aspp22 = document.getElementById("aspp22")
    var iq22 = document.getElementById("iq22")

    img22.setAttribute("src", json[1].image);
    img22.style.width = "100%"
    img22.style.height = "20vh"
    a22.textContent = json[1].description;
    a22.style.color = ("black")
    a22.style.fontSize = ("5px")
    as22.textContent = json[1].price;
    as22.style.marginTop = ("20px")
    asp22.textContent = json[1].category;    
    asp22.style.marginTop = ("-20px")
    aspp22.textContent = json[1].rating.rate;
    aspp22.style.marginTop = ("-20px")
    iq22.textContent = json[1].title;
    iq22.style.color = ("black")

    var img23 = document.getElementById("img23");
    var a23 = document.getElementById("a23");
    var as23 = document.getElementById("as23")
    var asp23 = document.getElementById("asp23")
    var aspp23 = document.getElementById("aspp23")
    var iq23 = document.getElementById("iq23")

    img23.setAttribute("src", json[2].image);
    img23.style.width = "100%"
    img23.style.height = "20vh"
    a23.textContent = json[2].description;
    a23.style.color = ("black")
    a23.style.fontSize = ("6px")
    as23.textContent = json[2].price;
    as23.style.marginTop = ("20px")
    asp23.textContent = json[2].category;    
    asp23.style.marginTop = ("-20px")
    aspp23.textContent = json[2].rating.rate;
    aspp23.style.marginTop = ("-20px")
    iq23.textContent = json[2].title;
    iq23.style.color = ("black")

    var img24 = document.getElementById("img24");
    var a24 = document.getElementById("a24");
    var as24 = document.getElementById("as24")
    var asp24 = document.getElementById("asp24")
    var aspp24 = document.getElementById("aspp24")
    var iq24 = document.getElementById("iq24")

    img24.setAttribute("src", json[3].image);
    img24.style.width = "100%"
    img24.style.height = "20vh"
    a24.textContent = json[3].description;
    a24.style.color = ("black")
    a24.style.fontSize = ("6px")
    as24.textContent = json[3].price;
    as24.style.marginTop = ("20px")
    asp24.textContent = json[3].category;    
    asp24.style.marginTop = ("-20px")
    aspp24.textContent = json[3].rating.rate;
    aspp24.style.marginTop = ("-20px")
    iq24.textContent = json[3].title;
    iq24.style.color = ("black")

    var img25 = document.getElementById("img25");
    var a25 = document.getElementById("a25");
    var as25 = document.getElementById("as25")
    var asp25 = document.getElementById("asp25")
    var aspp25 = document.getElementById("aspp25")
    var iq25 = document.getElementById("iq25")

    img25.setAttribute("src", json[4].image);
    img25.style.width = "100%"
    img25.style.height = "20vh"
    a25.textContent = json[4].description;
    a25.style.color = ("black")
    a25.style.fontSize = ("6px")
    as25.textContent = json[4].price;
    as25.style.marginTop = ("20px")
    asp25.textContent = json[4].category;    
    asp25.style.marginTop = ("-20px")
    aspp25.textContent = json[4].rating.rate;
    aspp25.style.marginTop = ("-20px")
    iq25.textContent = json[4].title;
    iq25.style.color = ("black")

    var img26 = document.getElementById("img26");
    var a26 = document.getElementById("a26");
    var as26 = document.getElementById("as26")
    var asp26 = document.getElementById("asp26")
    var aspp26 = document.getElementById("aspp26")
    var iq26 = document.getElementById("iq26")

    img26.setAttribute("src", json[5].image);
    img26.style.width = "100%"
    img26.style.height = "20vh"
    a26.textContent = json[5].description;
    a26.style.color = ("black")
    a26.style.fontSize = ("6px")
    as26.textContent = json[5].price;
    as26.style.marginTop = ("20px")
    asp26.textContent = json[5].category;    
    asp26.style.marginTop = ("-20px")
    aspp26.textContent = json[5].rating.rate;
    aspp26.style.marginTop = ("-20px")
    iq26.textContent = json[5].title;
    iq26.style.color = ("black")

    var img27= document.getElementById("img27");
    var a27 = document.getElementById("a27");
    var as27 = document.getElementById("as27")
    var asp27 = document.getElementById("asp27")
    var aspp27 = document.getElementById("aspp27")
    var iq27 = document.getElementById("iq27")

    img27.setAttribute("src", json[6].image);
    img27.style.width = "100%"
    img27.style.height = "20vh"
    a27.textContent = json[6].description;
    a27.style.color = ("black")
    a27.style.fontSize = ("8px")
    as27.textContent = json[6].price;
    as27.style.marginTop = ("20px")
    asp27.textContent = json[6].category;    
    asp27.style.marginTop = ("-20px")
    aspp27.textContent = json[6].rating.rate;
    aspp27.style.marginTop = ("-20px")
    iq27.textContent = json[6].title;
    iq27.style.color = ("black")

    var img28 = document.getElementById("img28");
    var a28 = document.getElementById("a28");
    var as28 = document.getElementById("as28")
    var asp28 = document.getElementById("asp28")
    var aspp28 = document.getElementById("aspp28")
    var iq28 = document.getElementById("iq28")

    img28.setAttribute("src", json[7].image);
    img28.style.width = "100%"
    img28.style.height = "20vh"
    a28.textContent = json[7].description;
    a28.style.color = ("black")
    a28.style.fontSize = ("8px")
    as28.textContent = json[7].price;
    as28.style.marginTop = ("20px")
    asp28.textContent = json[7].category;    
    asp28.style.marginTop = ("-20px")
    aspp28.textContent = json[7].rating.rate;
    aspp28.style.marginTop = ("-20px")
    iq28.textContent = json[7].title;
    iq28.style.color = ("black")

    var img29 = document.getElementById("img29");
    var a29 = document.getElementById("a29");
    var as29 = document.getElementById("as29")
    var asp29 = document.getElementById("asp29")
    var aspp29 = document.getElementById("aspp29")
    var iq29 = document.getElementById("iq29")

    img29.setAttribute("src", json[8].image);
    img29.style.width = "100%"
    img29.style.height = "20vh"
    a29.textContent = json[8].description;
    a29.style.color = ("black")
    a29.style.fontSize = ("8px")
    as29.textContent = json[8].price;
    as29.style.marginTop = ("20px")
    asp29.textContent = json[8].category;    
    asp29.style.marginTop = ("-20px")
    aspp29.textContent = json[8].rating.rate;
    aspp29.style.marginTop = ("-20px")
    iq29.textContent = json[8].title;
    iq29.style.color = ("black")

    var img30 = document.getElementById("img30");
    var a30 = document.getElementById("a30");
    var as30 = document.getElementById("as30")
    var asp30 = document.getElementById("asp30")
    var aspp30 = document.getElementById("aspp30")
    var iq30 = document.getElementById("iq30")

    img30.setAttribute("src", json[9].image);
    img30.style.width = "100%"
    img30.style.height = "20vh"
    a30.textContent = json[9].description;
    a30.style.color = ("black")
    a30.style.fontSize = ("8px")
    as30.textContent = json[9].price;
    as30.style.marginTop = ("20px")
    asp30.textContent = json[9].category;    
    asp30.style.marginTop = ("-20px")
    aspp30.textContent = json[9].rating.rate;
    aspp30.style.marginTop = ("-20px")
    iq30.textContent = json[9].title;
    iq30.style.color = ("black")

    var img31 = document.getElementById("img31");
    var a31 = document.getElementById("a31");
    var as31 = document.getElementById("as31")
    var asp31 = document.getElementById("asp31")
    var aspp31 = document.getElementById("aspp1")
    var iq31 = document.getElementById("iq31")

    img31.setAttribute("src", json[10].image);
    img31.style.width = "100%"
    img31.style.height = "20vh"
    a31.textContent = json[10].description;
    a31.style.color = ("black")
    a31.style.fontSize = ("4px")
    as31.textContent = json[10].price;
    as31.style.marginTop = ("20px")
    asp31.textContent = json[10].category;    
    asp31.style.marginTop = ("-20px")
    aspp31.textContent = json[10].rating.rate;
    aspp31.style.marginTop = ("-20px")
    iq31.textContent = json[10].title;
    iq31.style.color = ("black")

    var img32 = document.getElementById("img32");
    var a32 = document.getElementById("a32");
    var as32 = document.getElementById("a32")
    var asp32 = document.getElementById("asp32")
    var aspp32 = document.getElementById("aspp32")
    var iq32 = document.getElementById("iq32")


    img32.setAttribute("src", json[11].image);
    img32.style.width = "100%"
    img32.style.height = "20vh"
    a32.textContent = json[11].description;
    a32.style.color = ("black")
    a32.style.fontSize = ("15px")
    as32.style.marginTop = ("20px")
    asp32.textContent = json[11].category;    
    asp32.style.marginTop = ("-20px")
    aspp32.textContent = json[11].rating.rate;
    aspp32.style.marginTop = ("-20px")
    iq32.textContent = json[11].title;
    iq32.style.color = ("black")


    var img33 = document.getElementById("img33");
    var a33 = document.getElementById("a33");
    var a33 = document.getElementById("a33");
    var as33 = document.getElementById("a33")
    var asp33 = document.getElementById("asp33")
    var aspp33 = document.getElementById("aspp33")
    var iq33 = document.getElementById("iq33")
    

    img33.setAttribute("src", json[12].image);
    img33.style.width = "100%"
    img33.style.height = "20vh"
    a33.textContent = json[12].description;
    a33.style.color = ("black")
    a33.style.fontSize = ("6px")
    as33.style.marginTop = ("20px")
    asp33.textContent = json[12].category;    
    asp33.style.marginTop = ("-20px")
    aspp33.textContent = json[12].rating.rate;
    aspp33.style.marginTop = ("-20px")
    iq33.textContent = json[12].title;
    iq33.style.color = ("black")

    var img34 = document.getElementById("img34");
    var a34 = document.getElementById("a34");
    var a34 = document.getElementById("a34");
    var a34 = document.getElementById("a34");
    var asp34 = document.getElementById("asp34")
    var aspp34 = document.getElementById("aspp34")
    var iq34 = document.getElementById("iq34")

    img34.setAttribute("src", json[13].image);
    img34.style.width = "100%"
    img34.style.height = "20vh"
    a34.textContent = json[13].description;
    a34.style.color = ("black")
    a34.style.fontSize = ("6px")
    asp34.textContent = json[13].category;    
    asp34.style.marginTop = ("-20px")
    aspp34.textContent = json[13].rating.rate;
    aspp34.style.marginTop = ("-20px")
    iq34.textContent = json[13].title;
    iq34.style.color = ("black")

    var img35 = document.getElementById("img35");
    var a35 = document.getElementById("a35");
    var a35 = document.getElementById("a35");
    var a35 = document.getElementById("a35");
    var a35 = document.getElementById("a35");
    var asp35 = document.getElementById("asp35")
    var aspp35 = document.getElementById("aspp35")
    var iq35 = document.getElementById("iq35")

    img35.setAttribute("src", json[14].image);
    img35.style.width = "100%"
    img35.style.height = "20vh"
    a35.textContent = json[14].description;
    a35.style.color = ("black")
    a35.style.fontSize = ("3px")
    asp35.textContent = json[14].category;    
    asp35.style.marginTop = ("-20px")
    aspp35.textContent = json[14].rating.rate;
    aspp35.style.marginTop = ("-20px")
    iq35.textContent = json[14].title;
    iq35.style.color = ("black")
    
})
