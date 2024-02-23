import React from "react";
import {
  ChipWrapper,
  Container,
  ExpandMoreWrapper,
  ImgWrapper,
  Intro,
  Jobs,
  MobileWrapper,
  NavLinks,
  Navbar,
  Options,
  UploadTimeWrapper,
  Wrapper,
} from "./style";
import TemporaryDrawer from "../drawer/dashboard";
import Slider from "../carousel/Carousel";
import {Card, CardContent, Chip, Collapse, IconButton, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Footer from "../muicomponets/footer";
import GloballyCustomizedOptions from "../muicomponets/location";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckboxesTags from "../muicomponets/jobTipe";

const BASEURL = "http://localhost:5050/api/v1/";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const MainPage = () => {
  const [allData, setAllData] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [filteredData, setFilteredData] = React.useState("");
  const [expanded, setExpanded] = React.useState(false);


  // to expand icon
  const handleExpandClick = (_id) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [_id]: !prevExpanded[_id],
    }));
  };

  // to get all data
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASEURL}jobs/getAllJobs`);
        const data = await response.json();
        setFilteredData(data.data);
        setAllData(data.data);
        const initialExpandedState = {};
        data.data.forEach((item) => {
          initialExpandedState[item._id] = false;
        });
        setExpanded(initialExpandedState);
      } catch (error) {
        console.log("There is an error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  //to search data
  const handleSearch = (query) => {
    setSearch(query);
    const filtered = allData.filter(
      (data) =>
        data.name.toLowerCase().includes(query.toLowerCase()) ||
        data.corporateType.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div>
      <Container>
        <Navbar>
          <div>
            <h1 style={{ color: " #4348DB", font: "45px", font: "normal" }}>
              Jobify
            </h1>
          </div>
          <NavLinks>
            <p>All Jobs</p>
            <p>Internship</p>
            <p>Full time</p>
            <p>Engineering</p>
            <p>Designer</p>
            <p>Marketer</p>
            <p>Others</p>
          </NavLinks>
          <div>
            <TemporaryDrawer />
          </div>
        </Navbar>
        <Intro>
          <h1 style={{textAlign:"center"}}>
            Find <span style={{ color: "#4348DB" }}>Web3</span> and Relatable
            jobs for Students and Graduates
          </h1>
          <p style={{ color: "#AAAAAA"}}>Connecting Universities to Web3</p>
        </Intro>
        <Wrapper>
          <Options>
            <TextField fullWidth label="Search for jobs.." id="fullWidth" onChange={(e)=> handleSearch(e.target.value)} />
            <GloballyCustomizedOptions/>
            <CheckboxesTags/>
          </Options>
          <Jobs>
      {filteredData &&
          filteredData.map((data) => (
            <Card key={data.id} sx={{ width: "100%", borderRadius: "15px", padding: "5px" }}>
              <CardContent className="resposiveCardContent" sx={{ display: "flex", alignItems: "center" }}>
                <ImgWrapper>
                 <img src="" />
                  <div>
                    <h3 style={{ fontFamily: "Outfit", fontWeight: "400", color: "#4348DB", margin: "0px" }}>{data.name}</h3>
                    <p style={{ fontFamily: "Outfit", fontWeight: "400", margin: "0px" }}>{data.corporateType}</p>
                  </div>
                </ImgWrapper>
                <ChipWrapper>
                  <Chip className="chip" variant="soft"startDecorator={<LocationOnIcon/>}>
                    {data.location}
                  </Chip>
                  <Chip className="chip" variant="soft" startDecorator={<LocalAtmIcon/>}>
                    {data.salary}
                  </Chip>
                  <Chip className="chip" variant="soft" startDecorator={<WorkOutlineIcon/>}>
                    {data.employmentType}
                  </Chip>
                </ChipWrapper>
                <UploadTimeWrapper>
                  <p>124 applicants</p>
                  <h3>3 hours ago</h3>
                </UploadTimeWrapper>
                <ExpandMoreWrapper>
                  <ExpandMore
                    onClick={() => handleExpandClick(data._id)}
                    aria-expanded={expanded[data._id]}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                  <MobileWrapper>
                   <p>124 applicants</p>
                   <h3>3 hours ago</h3>
                  </MobileWrapper>
                </ExpandMoreWrapper>
              </CardContent>
              <Collapse in={expanded[data._id]} timeout="auto">
                <CardContent>
                  <Typography sx={{ margin: "3px", fontFamily: "Montserrat", fontWeight: "bold" }} paragraph>About the role:</Typography>
                  <Typography sx={{ fontFamily: "Outfit", fontWeight: 'light' }} paragraph>{data.role}</Typography>
                  {data.responsibilities && (
                    <>
                      <Typography sx={{ margin: "3px", fontFamily: "Montserrat", fontWeight: "bold" }} paragraph>Responsibilities:</Typography>
                      <ul style={{ marginTop: "3px" }}>
                        {data.responsibilities.split(',').map((responsibility, index) => (
                          <li style={{ fontFamily: "Outfit", fontWeight: "300" }} key={index}>{responsibility.trim()}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  <Typography sx={{ margin: "3px", fontFamily: "Montserrat", fontWeight: "bold" }} paragraph>Our ideal candidate:</Typography>
                  <Typography sx={{ fontFamily: "Outfit", fontWeight: 'light' }} paragraph>{data.idealCandidate}</Typography>
                </CardContent>
              </Collapse>
            </Card>
          ))}
      </Jobs>
        </Wrapper>
      </Container>
      {/* <Jobs>
      {filteredData &&
          filteredData.map((data) => (
            <Card key={data.id} sx={{ width: "100%", borderRadius: "15px", padding: "5px" }}>
              <CardContent className="resposiveCardContent" sx={{ display: "flex", alignItems: "center" }}>
                <ImgWrapper>
                 <img src="" />
                  <div>
                    <h3 style={{ fontFamily: "Outfit", fontWeight: "400", color: "#4348DB", margin: "0px" }}>{data.name}</h3>
                    <p style={{ fontFamily: "Outfit", fontWeight: "400", margin: "0px" }}>{data.corporateType}</p>
                  </div>
                </ImgWrapper>
                <ChipWrapper>
                  <Chip className="chip" variant="soft"startDecorator={<LocationOnIcon/>}>
                    {data.location}
                  </Chip>
                  <Chip className="chip" variant="soft" startDecorator={<LocalAtmIcon/>}>
                    {data.salary}
                  </Chip>
                  <Chip className="chip" variant="soft" startDecorator={<WorkOutlineIcon/>}>
                    {data.employmentType}
                  </Chip>
                </ChipWrapper>
                <UploadTimeWrapper>
                  <p>124 applicants</p>
                  <h3>3 hours ago</h3>
                </UploadTimeWrapper>
                <ExpandMoreWrapper>
                  <ExpandMore
                    onClick={() => handleExpandClick(data._id)}
                    aria-expanded={expanded[data._id]}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                  <MobileWrapper>
                   <p>124 applicants</p>
                   <h3>3 hours ago</h3>
                  </MobileWrapper>
                </ExpandMoreWrapper>
              </CardContent>
              <Collapse in={expanded[data._id]} timeout="auto">
                <CardContent>
                  <Typography sx={{ margin: "3px", fontFamily: "Montserrat", fontWeight: "bold" }} paragraph>About the role:</Typography>
                  <Typography sx={{ fontFamily: "Outfit", fontWeight: 'light' }} paragraph>{data.role}</Typography>
                  {data.responsibilities && (
                    <>
                      <Typography sx={{ margin: "3px", fontFamily: "Montserrat", fontWeight: "bold" }} paragraph>Responsibilities:</Typography>
                      <ul style={{ marginTop: "3px" }}>
                        {data.responsibilities.split(',').map((responsibility, index) => (
                          <li style={{ fontFamily: "Outfit", fontWeight: "300" }} key={index}>{responsibility.trim()}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  <Typography sx={{ margin: "3px", fontFamily: "Montserrat", fontWeight: "bold" }} paragraph>Our ideal candidate:</Typography>
                  <Typography sx={{ fontFamily: "Outfit", fontWeight: 'light' }} paragraph>{data.idealCandidate}</Typography>
                </CardContent>
              </Collapse>
            </Card>
          ))}
      </Jobs> */}
      <Slider />
      <Footer />
    </div>
  );
};

export default MainPage;
