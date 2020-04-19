import React from "react"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <div className="buttonAbout">About Us</div>
      <div className="serviceAddress">
        <div>
          <div>
            <div>
              <h1>SERVICE TIMES</h1>
              <h2>SUNDAY</h2>
              <h3>
                <b>English Worship:</b> 9:00am
                <br />
                <b>Spanish Worship:</b> 11:00am
              </h3>
              <h2>FRIDAY</h2>
              <h3>
                <b>Bilingual Worship:</b> 7:30pm
              </h3>
              <h2>WEDNESDAY</h2>
              <h3>
                <b>English Bible Study:</b> 7:30pm
                <br />
                <b>Spanish Bible Study:</b> 7:30pm
              </h3>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>
              <h1>ADDRESS</h1>
              <h3>
                860 Broadway Newark, NJ 07104
                <br />
                <b>Phone:</b> 973-484-5840
                <br />
                <b>Email:</b>
                <a href={"mailto:secretary@templerock.org"}>
                  secretary&#64;templerock.org
                </a>
              </h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.229844060659!2d-74.15889358544102!3d40.77896087932472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2544d25e4adc7%3A0x83464d5a28c22bd1!2s860%20Broadway%2C%20Newark%2C%20NJ%2007104!5e0!3m2!1sen!2sus!4v1583379802140!5m2!1sen!2sus"
                width={400}
                height={300}
                frameborder={0}
                allowfullscreen={true}
                title="churchAddress"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
