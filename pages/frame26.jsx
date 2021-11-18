import Layout from "../components/Layout";
import style from "../styles/common.module.css";
import frame26styles from "../styles/frame26.module.css";
import Image from "next/image";
import Banner from "../components/Banner";
import Holiday from "../components/Holidaycard";
import Frame26Text, { Frame26List } from "../components/Textarea";
import OfferSection from "../components/OfferSection";
import PillSection from "../components/PillSection";
import Locationcard from "../components/Locationcard";
import noteImg from "../public/img/noteImg.png";
import Button from "../components/Button";

const pillsList = [
  {
    pillLink: "#",
    pilltext: "Wakacje w styczniu",
  },
  {
    pillLink: "#",
    pilltext: "Wakacje w styczniu",
  },
  {
    pillLink: "#",
    pilltext: "Wakacje w styczniu",
  },
  {
    pillLink: "#",
    pilltext: "Wakacje w styczniu",
  },
  {
    pillLink: "#",
    pilltext: "Wakacje w styczniu",
  },
  {
    pillLink: "#",
    pilltext: "Wakacje w styczniu",
  },
];
function frame26() {
  return (
    <>
      <Layout>
        <div className="container wd">
          <Banner title="Sylwester w Dubaju" />
          <div className="row my-5">
            <div className="col-lg-8 col-md-12 mb-5">
              <Locationcard />
              <div>
                <div className={frame26styles.text__area}>
                  <h4>Gdzie w grudniu jest ciepło?</h4>
                  <p>
                    {`Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.`}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <Holiday />
            </div>
          </div>
          <section className="pb-5">
            <div className="container wd">
              <div className="row">
                <div className="col-lg-12">
                  <div className={frame26styles.note__section}>
                    <div className="img">
                      <Image
                        src={noteImg}
                        width={129}
                        height={115}
                        alt="note"
                      />
                    </div>
                    <div className={`${frame26styles.note__text} ml-4`}>
                      <h4>Czytaj również:</h4>
                      <p>Najlepsze hotele z aquaparkami w Hiszpanii</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className={style.multi__col}>
                    <Frame26Text
                      title={`Opady`}
                      desc={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. `}
                      highlighted={`It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
                    />
                    <Frame26Text
                      title={`Temperatura wody`}
                      desc={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. `}
                      highlighted={`It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
                    />
                    <Frame26Text
                      title={`Godziny słoneczne`}
                      desc={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. `}
                      highlighted={`It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
                    />
                    {/* Q & A section */}
                    <section>
                      <Frame26List
                        title={`Pytania i odpowiedzi`}
                        subtitle={` Lorem Ipsum is simply dummy text of the printing and? `}
                        desc={`Lorem Ipsum is simply dummy text of the printing and typesetting
                             industry. Lorem Ipsum has been the industry's standard dummy text
                             ever since the 1500s, when an unknown printer took a galley of type
                             and scrambled it to make a type specimen book. It has survived not
                             only five centuries, but also the leap into electronic typesetting,
                             remaining essentially unchanged.`}
                      />
                      <Frame26List
                        subtitle={` Lorem Ipsum is simply dummy text of the printing and? `}
                        desc={`Lorem Ipsum is simply dummy text of the printing and typesetting
                             industry. Lorem Ipsum has been the industry's standard dummy text
                             ever since the 1500s, when an unknown printer took a galley of type
                             and scrambled it to make a type specimen book. It has survived not
                             only five centuries, but also the leap into electronic typesetting,
                             remaining essentially unchanged.`}
                      />
                      <Frame26List
                        subtitle={` Lorem Ipsum is simply dummy text of the printing and? `}
                        desc={`Lorem Ipsum is simply dummy text of the printing and typesetting
                             industry. Lorem Ipsum has been the industry's standard dummy text
                             ever since the 1500s, when an unknown printer took a galley of type
                             and scrambled it to make a type specimen book. It has survived not
                             only five centuries, but also the leap into electronic typesetting,
                             remaining essentially unchanged.`}
                      />
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="container wd">
            <div className="my-5">
              <h3 className="mb-5">Gorące oferty Last Minute</h3>
              <div className="row">
                <OfferSection />
                <OfferSection />
                <OfferSection />
                <OfferSection />
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <Button />
                </div>
              </div>
            </div>
          </section>

          <section className="container wd">
            <div className="my-5">
              <div className="row">
                <div className="col-lg-12">
                  <div className={style.pills__title}>
                    <h3>Sprawdź gdzie jechać na wakacje</h3>
                  </div>
                  <div className={style.pills__div}>
                    {pillsList.map((item, index) => (
                      <PillSection item={item} key={index} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}

export default frame26;
