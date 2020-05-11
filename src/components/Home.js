import React from "react";

// Parallax
import { Parallax } from "react-parallax";

// Carousel
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

// Input validation
import { Textbox, Textarea } from "react-inputs-validation";
import "react-inputs-validation/lib/react-inputs-validation.min.css";

// Spinner
import FadeLoader from "react-spinners/FadeLoader";

// AJAX
import axios from "axios";

// Hamburger
import HamburgerMenu from "react-hamburger-menu";

// Images
import logo from "../rv.png";
import cook from "../cook.jpg";
import swipe from "../swipe.png";
import trad from "../trad.jpg";
import recipes from "../recipes.jpg";
const img0 =
  "https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-0/p640x640/38680482_2184443528250283_8744042914843197440_o.jpg?_nc_cat=106&_nc_sid=110474&_nc_ohc=iQuwpU_a0k8AX-6xcHT&_nc_ht=scontent-lht6-1.xx&_nc_tp=6&oh=26ff88ae1ec4e0c9409842f7112eb28c&oe=5EDFE3A1";
const img1 =
  "https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/s960x960/88110956_3240180806009878_887671939382902784_o.jpg?_nc_cat=106&_nc_sid=110474&_nc_ohc=FTGFfTm-RS8AX8pUzT8&_nc_ht=scontent-lht6-1.xx&_nc_tp=7&oh=9a35bf2570c7225dbf1bcb0ec2a64498&oe=5EE0D381";
const img4 = "https://wallpapersmug.com/large/930962/vegetables-fresh.jpg";
const img5 =
  "https://scontent-lhr8-1.xx.fbcdn.net/v/t1.0-0/p640x640/89250627_3252348751459750_4295944469779316736_o.jpg?_nc_cat=107&_nc_sid=110474&_nc_ohc=7vDHXaYG3KQAX8uqFoX&_nc_ht=scontent-lhr8-1.xx&_nc_tp=6&oh=5228247015a7c3f1905109c4d104a2ef&oe=5EE0BDA6";

const end =
  "https://scontent-lhr8-1.xx.fbcdn.net/v/t1.0-0/p640x640/76778234_102413797893748_7436713577848766464_o.jpg?_nc_cat=107&_nc_sid=0be424&_nc_ohc=aZ9TOz-eQzAAX9k5wAg&_nc_ht=scontent-lhr8-1.xx&_nc_tp=6&oh=98d849845c1121104d1df75c39044654&oe=5EDF57FE";

const p1 =
  "https://scontent-lhr8-1.xx.fbcdn.net/v/t1.0-9/s960x960/92303633_2487360384910023_5423096286574280704_o.jpg?_nc_cat=102&_nc_sid=85a577&_nc_ohc=gLuO80lGA9YAX-dsPHZ&_nc_ht=scontent-lhr8-1.xx&_nc_tp=7&oh=7861c80f8dd77c9efd15aed439d5e897&oe=5EE0574A";

const p2 =
  "https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/s960x960/51295915_1343727049098298_849775974051479552_o.jpg?_nc_cat=103&_nc_sid=85a577&_nc_ohc=raaSB_gMqUIAX_7Go3f&_nc_ht=scontent-lht6-1.xx&_nc_tp=7&oh=1c9ce4741f4f9065a9434d3e7dd57af3&oe=5EDDA1B8";

const p3 =
  "https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/p960x960/76994992_10156857249989077_7757636081121492992_o.jpg?_nc_cat=103&_nc_sid=85a577&_nc_ohc=38ROeJBS_f4AX9Ywf7d&_nc_ht=scontent-lht6-1.xx&_nc_tp=6&oh=8b86a1ae829fcd8a4236bf5e83a78873&oe=5EE020DF";

const p4 =
  "https://scontent-lhr8-1.xx.fbcdn.net/v/t1.0-9/92203217_1329170700608606_1664428530189991936_n.jpg?_nc_cat=110&_nc_sid=85a577&_nc_ohc=-Oc-X9jxJogAX-Cwxg2&_nc_ht=scontent-lhr8-1.xx&oh=ecd71a9e03e778edcc3382a635a763dc&oe=5EDDCD13";

const p5 =
  "https://scontent-lhr8-1.xx.fbcdn.net/v/t1.0-9/s960x960/79425522_820764835032057_2338512639296012288_o.jpg?_nc_cat=111&_nc_sid=85a577&_nc_ohc=W1HPUuOGGckAX-1DACe&_nc_ht=scontent-lhr8-1.xx&_nc_tp=7&oh=fb96fe396195293fbf7ea8b7a056a42f&oe=5EDFF0C3";

const ac1 =
  "https://scontent-lhr8-1.xx.fbcdn.net/v/t1.0-9/s960x960/75271562_102421687892959_6158217649097539584_o.jpg?_nc_cat=109&_nc_sid=0be424&_nc_ohc=__gcKB0dNJ4AX8FuCXa&_nc_ht=scontent-lhr8-1.xx&_nc_tp=7&oh=cda8db659a8b968cb08ff02ef49eb3aa&oe=5EDD4A63";
const ac2 =
  "https://scontent-lhr8-1.xx.fbcdn.net/v/t1.0-0/p640x640/76654421_102417297893398_5057291233324433408_o.jpg?_nc_cat=109&_nc_sid=0be424&_nc_ohc=Ub-8ZWsSTgUAX98QfQu&_nc_ht=scontent-lhr8-1.xx&_nc_tp=6&oh=8f3fe7762d9ff33b428cd7f0a49e2723&oe=5EDFD28C";
const ac3 =
  "https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-0/p640x640/77426659_116582016476926_3562538573028655104_o.jpg?_nc_cat=108&_nc_sid=0be424&_nc_ohc=ARu7w-RNDzoAX-GkTlz&_nc_ht=scontent-lht6-1.xx&_nc_tp=6&oh=76e6eb640a8adf2508dbe1a06b5b1e2d&oe=5EDF73A2";
const ac4 =
  "https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/s960x960/75264956_102421594559635_5718470383045181440_o.jpg?_nc_cat=108&_nc_sid=0be424&_nc_ohc=0X9rLHegpgcAX81yFxN&_nc_ht=scontent-lht6-1.xx&_nc_tp=7&oh=5379307aae93d81b33cb982a42371e54&oe=5EDDCD72";
const ac5 =
  "https://scontent-lhr8-1.xx.fbcdn.net/v/t1.0-0/p640x640/78745601_116581773143617_3978982862656372736_o.jpg?_nc_cat=109&_nc_sid=0be424&_nc_ohc=iOX4Ymva0fIAX-8Hcx-&_nc_ht=scontent-lhr8-1.xx&_nc_tp=6&oh=86537458d4c2aaab0004a146f7320464&oe=5EDD90B1";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      phone: "",
      mess: "",
      isTop: true,
      nameValidation: false,
      phoneValidation: false,
      messValidation: false,
      loading: false,
      success: false,
      error: false,
      isOpen: false,
      status: undefined,
    };

    this.firstRef = React.createRef();
    this.prezRef = React.createRef();
    this.retRef = React.createRef();
    this.revRef = React.createRef();
    this.contactRef = React.createRef();
    this.aboutRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop });
      }
    });
  }

  handleClick() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      loading: false,
      success: false,
      error: false,
    });

    if (this.state.phone === "") {
      this.setState({
        loading: false,
      });
    } else if (this.state.nameValidation === false) {
      this.setState({
        loading: false,
      });
    } else if (this.state.phoneValidation === false) {
      this.setState({
        loading: false,
      });
    } else if (this.state.messValidation === false) {
      this.setState({
        loading: false,
      });
    } else {
      this.setState({
        loading: true,
      });
      let { name, phone, mess } = this.state;
      // https://spleeter.co.uk/vr
      // http://localhost:3005/vr
      axios
        .post("https://spleeter.co.uk/vr", {
          name,
          phone,
          text: mess,
        })
        .then((res) => {
          this.setState({
            name: "",
            phone: "",
            mess: "",
          });
          if (res.data.status === "true") {
            this.setState({
              success: true,
              loading: false,
            });
            setTimeout(() => {
              this.setState({
                success: false,
              });
            }, 5000);
          } else {
            this.setState({
              error: true,
              loading: false,
            });
            setTimeout(() => {
              this.setState({
                error: false,
              });
            }, 5000);
          }
        })
        .catch((err) => {
          this.setState({
            error: true,
            loading: false,
          });
          setTimeout(() => {
            this.setState({
              error: false,
            });
          }, 5000);
        });
    }
  };

  render() {
    let { name, phone, mess } = this.state;

    console.log(this.state.phoneValidation);
    let currentYear = new Date().getFullYear();
    return (
      <>
        <span ref={this.firstRef}></span>
        {this.state.isOpen ? (
          <div className="h-nav">
            <ul className="nav-list">
              <span
                onClick={() => {
                  window.scrollTo(0, this.firstRef.current.offsetTop);
                  this.setState({
                    isOpen: !this.state.isOpen,
                  });
                }}
                className="btn-home "
              >
                Prima pagină
              </span>
              <span
                onClick={() => {
                  window.scrollTo(0, this.aboutRef.current.offsetTop - 60);
                  this.setState({
                    isOpen: !this.state.isOpen,
                  });
                }}
                className="btn-about"
              >
                Despre Chef
              </span>
              <span
                onClick={() => {
                  window.scrollTo(0, this.prezRef.current.offsetTop - 60);
                  this.setState({
                    isOpen: !this.state.isOpen,
                  });
                }}
                className="btn-recipes"
              >
                Reţete
              </span>
              <span
                onClick={() => {
                  window.scrollTo(0, this.retRef.current.offsetTop - 60);
                  this.setState({
                    isOpen: !this.state.isOpen,
                  });
                }}
                className="btn-menu"
              >
                Postări
              </span>
              <span
                onClick={() => {
                  window.scrollTo(0, this.revRef.current.offsetTop - 60);
                  this.setState({
                    isOpen: !this.state.isOpen,
                  });
                }}
                className="btn-menu"
              >
                Recenzii
              </span>
              <span
                onClick={() => {
                  window.scrollTo(0, this.contactRef.current.offsetTop - 638);
                  this.setState({
                    isOpen: !this.state.isOpen,
                  });
                }}
                className="btn-contact"
              >
                Contact
              </span>
              <div className="sm">
                <a id="fb" href="https://www.facebook.com/vidicanraul1/">
                  <i
                    className="fab fa-facebook-square"
                    title="Pagină Facebook"
                  ></i>
                </a>
                <a id="ig" href="https://www.instagram.com/raul_vidican1/">
                  <i className="fab fa-instagram" title="Pagină Instagram"></i>
                </a>
              </div>
            </ul>
          </div>
        ) : null}
        <div className={this.state.isTop ? "main-nav" : "main-nav black"}>
          <div className="logo-area">
            <img src={logo} alt="Vidican Raul Logo" />
          </div>
          <div className="main-menu">
            <ul className="nav-list">
              <span
                onClick={() =>
                  window.scrollTo(0, this.firstRef.current.offsetTop)
                }
                className="btn-home "
              >
                Prima pagină
              </span>
              <span
                onClick={() =>
                  window.scrollTo(0, this.aboutRef.current.offsetTop - 77)
                }
                className="btn-about"
              >
                Despre Chef
              </span>
              <span
                onClick={() =>
                  window.scrollTo(0, this.prezRef.current.offsetTop - 78)
                }
                className="btn-recipes"
              >
                Reţete
              </span>
              <span
                onClick={() =>
                  window.scrollTo(0, this.retRef.current.offsetTop - 79)
                }
                className="btn-menu"
              >
                Postări
              </span>
              <span
                onClick={() =>
                  window.scrollTo(0, this.revRef.current.offsetTop - 80)
                }
                className="btn-menu"
              >
                Recenzii
              </span>
              <span
                onClick={() =>
                  window.scrollTo(0, this.contactRef.current.offsetTop - 678)
                }
                className="btn-contact"
              >
                Contact
              </span>
              <a id="fb" href="https://www.facebook.com/vidicanraul1/">
                <i
                  className="fab fa-facebook-square"
                  title="Pagină Facebook"
                ></i>
              </a>
              <a id="ig" href="https://www.instagram.com/raul_vidican1/">
                <i className="fab fa-instagram" title="Pagină Instagram"></i>
              </a>
            </ul>
            <HamburgerMenu
              isOpen={this.state.isOpen}
              menuClicked={this.handleClick.bind(this)}
              className="hamburger"
              width={35}
              height={25}
              strokeWidth={2}
              rotate={180}
              color="white"
              borderRadius={0}
              animationDuration={0.3}
            />
          </div>
        </div>
        <Parallax bgImage={img0} strength={1000}>
          <div id="img" />
          <div id="span">
            <p>Vidican Raul</p>
            <span
              onClick={() =>
                window.scrollTo(0, this.aboutRef.current.offsetTop - 77)
              }
            >
              <p id="next-page">Pagina următoare</p>
              <i className="fas fa-chevron-down"></i>
            </span>
          </div>
        </Parallax>
        <div ref={this.aboutRef} className="about-chef">
          <div className="portrait">
            <img src={img1} alt="Vidican Raul Portret" />
          </div>
          <div className="about-text">
            <div className="title-sep">
              <h1 id="meet">Chef Vidican Raul</h1>
              <hr />
            </div>
            <p id="text">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content.
            </p>
            <p id="contact">Tel: 123-456-7890 | Email: info@mysite.com</p>
          </div>
        </div>
        <span ref={this.prezRef} />
        <Parallax className="parallax2" bgImage={img4} strength={400}>
          <div id="img2" />
          <Carousel
            animationSpeed={1500}
            stopAutoPlayOnHover={true}
            keepDirectionWhenDragging={true}
            arrows={false}
            centered
            autoPlay={5000}
            infinite={true}
          >
            <div className="card1">
              <div className="media">
                <img src={recipes} alt="Carte de reţete" />
              </div>
              <h1 id="title1">Carte de reţete</h1>
              <span id="line" />
              <p id="text">
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy.
              </p>
              <span id="link">Spre meniu ></span>
            </div>
            <div className="card2">
              <div className="media">
                <img src={cook} alt="Carte de reţete" />
              </div>
              <h1 id="title1">Alegerea bucătarului</h1>
              <span id="line" />
              <p id="text">
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy.
              </p>
              <span id="link">Spre alegeri ></span>
            </div>
            <div className="card3">
              <div className="media">
                <img src={trad} alt="Carte de reţete" />
              </div>
              <h1 id="title1">Tradiţional</h1>
              <span id="line" />
              <p id="text">
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy.
              </p>
              <span id="link">Spre tradiţie ></span>
            </div>
          </Carousel>
          <div className="swipe-container">
            <img id="swipe" src={swipe} alt="Indicator Swipe" />
          </div>
        </Parallax>
        <div ref={this.retRef} className="posts">
          <div className="card2">
            <div className="media">
              <img src={cook} alt="Carte de reţete" />
            </div>
            <h1 id="title1">Alegerea bucătarului</h1>
            <span id="line" />
            <p id="text">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy.
            </p>
            <span id="link">Spre alegeri ></span>
          </div>
          <div className="card2">
            <div className="media">
              <img src={cook} alt="Carte de reţete" />
            </div>
            <h1 id="title1">Alegerea bucătarului</h1>
            <span id="line" />
            <p id="text">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy.
            </p>
            <span id="link">Spre alegeri ></span>
          </div>
          <div className="card2">
            <div className="media">
              <img src={cook} alt="Carte de reţete" />
            </div>
            <h1 id="title1">Alegerea bucătarului</h1>
            <span id="line" />
            <p id="text">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy.
            </p>
            <span id="link">Spre alegeri ></span>
          </div>
          <div className="card2">
            <div className="media">
              <img src={cook} alt="Carte de reţete" />
            </div>
            <h1 id="title1">Alegerea bucătarului</h1>
            <span id="line" />
            <p id="text">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy.
            </p>
            <span id="link">Spre alegeri ></span>
          </div>
        </div>
        <span ref={this.revRef}></span>
        <Parallax className="parallax3" bgImage={img5} strength={300}>
          <div id="img3" />
          <Carousel
            animationSpeed={1500}
            stopAutoPlayOnHover={true}
            keepDirectionWhenDragging={true}
            arrows={false}
            centered
            autoPlay={5000}
            infinite={true}
          >
            <div className="card1">
              <div className="media">
                <i className="fas fa-quote-left"></i>
              </div>
              <p id="text">
                Raul Vidican este un tanar de o valoare inestimabila, cu viziuni
                inalte si potential inegalabil...Raul te felicit si te urmaresc
                cu mult interes!!!!! Si te sustin dorindu-ti sa atingi
                apogeul!!!!!
              </p>
              <span id="line" />
              <div className="media2">
                <img src={p1} alt="Profil Susana Szekely" />
              </div>
              <h1 id="title1">Susana Szekely, Lleida</h1>
            </div>
            <div className="card2">
              <div className="media">
                <i className="fas fa-quote-left"></i>
              </div>
              <p id="text">
                Un chef cu o personalitate demna de toate laudele. Mult succes!
              </p>
              <span id="line" />
              <div className="media2">
                <img src={p2} alt="Profil Marius Ciobanu" />
              </div>
              <h1 id="title1">Marius Ciobanu, Bucureşti</h1>
            </div>
            <div className="card3">
              <div className="media">
                <i className="fas fa-quote-left"></i>
              </div>
              <p id="text">
                Un om valoros si talentat care pune pasiune si transforma orice
                aliment in arta!
              </p>
              <span id="line" />
              <div className="media2">
                <img src={p3} alt="Profil Gabriela Miu Rînja" />
              </div>
              <h1 id="title1">Gabriela Miu Rînja, Dej</h1>
            </div>
            <div className="card4">
              <div className="media">
                <i className="fas fa-quote-left"></i>
              </div>
              <p id="text">
                Om serios,bine pregătit profesional și cu mult interes pt
                prosperitate ! Succes și respect pt tot ceea ce face!
              </p>
              <span id="line" />
              <div className="media2">
                <img src={p4} alt="Profil Johann Marianne Streit" />
              </div>
              <h1 id="title1">Johann Marianne Streit, Timişoara</h1>
            </div>
            <div className="card5">
              <div className="media">
                <i className="fas fa-quote-left"></i>
              </div>
              <p id="text">
                Un bucatar excelent cu rafinament , simplitate si gust ..demn de
                un succes maret
              </p>
              <span id="line" />
              <div className="media2">
                <img
                  src={p5}
                  alt="Profil 
Adelina Iancu"
                />
              </div>
              <h1 id="title1">Adelina Iancu, Arad</h1>
            </div>
          </Carousel>
          <div className="swipe-container">
            <img id="swipe" src={swipe} alt="Indicator Swipe" />
          </div>
        </Parallax>
        <div className="contact-form">
          <h1>La serviciul dumneavoastră</h1>
          <p>Tel: 123-456-7890 | Email: info@mysite.com</p>
          <span id="line"></span>
          <form>
            <div className="form-group">
              <label>Nume şi prenume *</label>
              <Textbox
                attributesInput={{
                  id: "Name",
                  name: "Name",
                  type: "text",
                  placeholder: "Nume şi prenume",
                }}
                value={name} // Optional.[String].Default: "".
                onChange={(name, e) => {
                  this.setState({ name });
                }} // Required.[Func].Default: () => {}. Will return the value.
                onBlur={(e) => {
                  if (this.state.name === "") {
                    this.setState({
                      nameValidation: false,
                    });
                  } else {
                    this.setState({
                      nameValidation: true,
                    });
                  }
                }} // Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                validationOption={{
                  check: true, // Optional.[Bool].Default: true. To determin if you need to validate.
                  required: true, // Optional.[Bool].Default: true. To determin if it is a required field.
                  msgOnError: "Numele nu poate fi omis",
                }}
              />
            </div>
            <div className="form-group">
              <label>Telefon *</label>
              <Textbox
                attributesInput={{
                  id: "phone",
                  placeholder: "Telefon (10 cifre)",
                  type: "text",
                }}
                value={phone}
                onChange={(phone, e) => {
                  this.setState({ phone });
                }}
                onBlur={(e) => {
                  if (this.state.phone.length > 10) {
                    this.setState({
                      phoneValidation: false,
                    });
                  } else if (this.state.phone.length < 10) {
                    this.setState({
                      phoneValidation: false,
                    });
                  } else if (this.state.phone.length === 10) {
                    this.setState({
                      phoneValidation: true,
                    });
                  }
                }} //Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                validationOption={{
                  check: true, //Optional.[Bool].Default: true. To determin if you need to validate.
                  required: true, //Optional.[Bool].Default: true. To determin if it is a required field.
                  msgOnError: "Numărul de telefon nu poate fi omis",
                  customFunc: (value) => {
                    if (value.match(/\d/g).length < 10) {
                      return "Numărul de telefon nu este corect";
                    } else if (value.match(/\d/g).length > 10) {
                      return "Numărul de telefon nu este corect";
                    } else {
                      return true;
                    }
                  },
                }}
              />
            </div>
            <div className="form-group">
              <label>Mesaj *</label>
              <Textarea
                attributesInput={{
                  id: "mess",
                  name: "Mess",
                  type: "text",
                  placeholder: "Mesajul dumneavoastră",
                }}
                value={mess} // Optional.[String].Default: "".
                onChange={(mess, e) => {
                  this.setState({ mess });
                }} // Required.[Func].Default: () => {}. Will return the value.
                onBlur={(e) => {
                  if (this.state.mess === "") {
                    this.setState({
                      messValidation: false,
                    });
                  } else {
                    this.setState({
                      messValidation: true,
                    });
                  }
                }} // Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                validationOption={{
                  check: true, // Optional.[Bool].Default: true. To determin if you need to validate.
                  required: true, // Optional.[Bool].Default: true. To determin if it is a required field.
                  msgOnError: "Mesajul nu poate fi omis",
                }}
              />
            </div>
            <div ref={this.contactRef} className="contact-response">
              {this.state.loading ? (
                <FadeLoader
                  height={15}
                  width={5}
                  radius={2}
                  margin={2}
                  color={"black"}
                  loading={true}
                />
              ) : null}
              {this.state.success ? (
                <p>
                  <i className="fas fa-check-circle"></i>
                  Mesajul a fost trimis
                </p>
              ) : null}
              {this.state.error ? (
                <p>
                  <i className="fas fa-exclamation-circle"></i>
                  Eroare. Mesajul nu a fost trimis
                </p>
              ) : null}
            </div>
            <div onClick={this.handleSubmit} className="btn-10">
              Trimite
            </div>
          </form>
        </div>
        <Parallax className="parallax4" bgImage={end} strength={200}>
          <div id="img4" />
        </Parallax>
        <div className="footer">
          <div className="images">
            <span id="ac1">
              <img src={ac1} alt="Artă culinară #1" />
            </span>

            <img src={ac2} alt="Artă culinară #2" />
            <img src={ac3} alt="Artă culinară #3" />
            <img src={ac4} alt="Artă culinară #4" />
            <img src={ac5} alt="Artă culinară #5" />
          </div>
          <div className="footer-data">
            <h1>#ChefVidicanRaul</h1>
            <p id="contact-data">Tel: 123-456-7890 | Email: info@mysite.com</p>
            <p id="copy">
              {currentYear} &copy;{" "}
              <a href="https://baderproductions.net/">BADERproductions</a>
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
