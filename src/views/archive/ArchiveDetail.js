import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as CouncilCommon from '../council/CouncilCommon'
import { withAuthenticator } from "@aws-amplify/ui-react";
import { useQuery, gql } from '@apollo/client';
import GoBackButton from '../../components/button/GoBackButton';

const ArchiveDetail = ({ signOut, user }) => {
    const params = useParams;

    const selectTodo = gql`
    query listInnohis {
          listStartupArchiveData (limit: 500) {
            items {
              id
              category_L
              city
              category_S
              country
              employeeNum
              estbYear
              investRound
              logoLink
              moneyRaised
              name
              service
              no
            }
          }
      }
    `;

    const { loading, data } = useQuery(selectTodo);

    const RenderStartup = () => {

        if (!loading) {
            const returnValue = (data.listStartupArchiveData.items).find(function (jsonData) { return jsonData.no === params().bno })

            return (
                <>
                    <div className="container">
                        <div className="table-responsive-md" >
                            <table className="table table-bordered" style={{ fontFamily: 'Jost', minHeight: '500px' }}>
                                <thead>
                                    <tr align="center" style={{ backgroundColor: 'rgba(242, 242, 242, 0.706)' }}>
                                        <th colSpan="2"><img src={returnValue.logoLink} alt="" style={{ width: "100px", maxHeight: "auto" }}></img></th>
                                        <th colSpan="2" style={{ backgroundColor: 'rgba(242, 242, 242, 0.706)', textAlign: 'center', padding: '30px 0px' }}><span style={{ fontSize: '30px' }}>{returnValue.name}</span></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        {/* <td width="10%">??????</td>
                                        <td width="40%">22</td>
                                        <td width="10%">????????????</td>
                                        <td width="40%">33</td> */}
                                        <td align="center" width="15%">????????????</td>
                                        <td colSpan="1" width="35%">{returnValue.category_L}</td>
                                        <td align="center" width="15%">????????????</td>
                                        <td colSpan="1" width="35%">{returnValue.category_S}</td>
                                    </tr>
                                    <tr>
                                        <td align="center" colSpan="1">?????? ?????????</td>
                                        <td colSpan="3">{returnValue.service}</td>
                                    </tr>
                                    <tr >
                                        <td align="center" colSpan="1">????????????</td>
                                        <td colSpan="1">{returnValue.investRound}</td>
                                        <td align="center" colSpan="1">????????????</td>
                                        <td colSpan="1">{returnValue.moneyRaised}</td>
                                    </tr>
                                    <tr >
                                        <td align="center" colSpan="1">?????? ??????</td>
                                        <td colSpan="1">{returnValue.employeeNum}</td>
                                        <td align="center" colSpan="1">?????? ??????</td>
                                        <td colSpan="1">{returnValue.employeeNum}</td>
                                    </tr>
                                    <tr >
                                        <td align="center" colSpan="1">??????</td>
                                        <td colSpan="1">{returnValue.country}</td>
                                        <td align="center" colSpan="1">??????</td>
                                        <td colSpan="1">{returnValue.city}</td>
                                    </tr>
                                    <tr >
                                        <td align="center" colSpan="1">?????? ??????</td>
                                        <td colSpan="3">{returnValue.estbYear}</td>
                                    </tr>
                                </tbody>
                            </table>

                            <GoBackButton />
                        </div>
                    </div>
                </>
            )
        } else {
            return (
                <><p></p></>
            )
        }
    }

    CouncilCommon.headerGrid();
    CouncilCommon.eventLogOut(signOut);
    CouncilCommon.changeName(CouncilCommon.usernameCheck(user));

    useEffect(() => { });

    return (
        <>
            <section id="portfolio" className="portfolio section-bg" style={{ marginTop: '61px' }}>
                <div className="container" data-aos="fade-up" >
                    <div className="section-title">
                        <h2>???????????? ??????</h2>
                        {/* <p>????????? ????????? ???????????? innoHI??? ??? ??????????????????.</p> */}
                    </div>
                    <RenderStartup />
                </div>
            </section>
        </>
    )
}

export default withAuthenticator(ArchiveDetail, {
    socialProviders: ['google'],
    hideSignUp: [true],
    //   loginMechanisms : ['username'],
    loginMechanisms: ['email'],
    //  components : [components],
    variation: ["modal"]
});