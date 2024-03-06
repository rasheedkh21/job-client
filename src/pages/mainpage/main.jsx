import React from "react";
import {
  ChipWrapper,
  Container,
  Details,
  ExpandMoreWrapper,
  ImgWrapper,
  Intro,
  Jobs,
  NavLinks,
  Navbar,
  Options,
  UploadTimeWrapper,
  Wrapper,
} from "./style";
import TemporaryDrawer from "../drawer/dashboard";
import Slider from "../carousel/Carousel";
import {
  Card,
  CardContent,
  Collapse,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Footer from "../muicomponets/footer";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PlaceIcon from "@mui/icons-material/Place";
import PaidIcon from "@mui/icons-material/Paid";
import WorkIcon from "@mui/icons-material/Work";
import { Option, Select } from "@mui/joy";
import { CloseRounded } from "@mui/icons-material";
const BASEURL = "https://abdurashid-job-offer-api.isabek.uz/api/v1/";

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
  const [checkActive, setCheckActive] = React.useState(true);
  const [value, setValue] = React.useState("");

  //Filter by Salary
  const handleFilterJobPositon = (jobRole) => {
    if (checkActive) {
      const checkedBox = allData.filter((data) => data.jobRole === jobRole);
      setFilteredData(checkedBox);
    } else {
      setFilteredData(allData);
    }
    setCheckActive(!checkActive);
  };
  //Filter by Location
  const handleLocationFilter = (location) => {
    if (checkActive) {
      const checkedBox = allData.filter((data) => data.location === location);
      setFilteredData(checkedBox);
    } else {
      setFilteredData(allData);
    }
    setCheckActive(!checkActive);
  };
  //Filter by Salary
  const handleFilterSalary = (salary) => {
    if (checkActive) {
      const checkedBox = allData.filter((data) => data.salary === salary);
      setFilteredData(checkedBox);
    } else {
      setFilteredData(allData);
    }
    setCheckActive(!checkActive);
  };
  //Reset Data
  const handleResetAllData = () => {
    setValue(null); // Reset the selected value
    setFilteredData(allData); // Reset the filtered data to all data
    setCheckActive(true); // Reset the checkbox state
  };

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

  //TO ADD added date
  const formatDate = (createdAt) => {
    const data = new Date(createdAt);
    return data.toISOString().split("T")[0];
  };
  console.log(formatDate);

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
          <h1 style={{ textAlign: "center" }}>
            Find <span style={{ color: "#4348DB" }}>Web3</span> and Relatable
            jobs for Students and Graduates
          </h1>
          <p style={{ color: "#AAAAAA" }}>Connecting Universities to Web3</p>
        </Intro>
        <Wrapper>
          <Options>
            <TextField
              fullWidth
              label="Search for jobs.."
              id="fullWidth"
              onChange={(e) => handleSearch(e.target.value)}
            />
            <Select
              // action={action}
              value={value}
              placeholder="Location"
              onChange={(e, newValue) => setValue(newValue)}
              {...(value && {
                // display the button and remove select indicator
                // when user has selected a value
                endDecorator: (
                  <IconButton
                    size="sm"
                    variant="plain"
                    color="neutral"
                    onMouseDown={(event) => {
                      // don't open the popup when clicking on this button
                      event.stopPropagation();
                    }}
                    onClick={() => {
                      setValue(null);
                      handleResetAllData();
                      // action.current?.focusVisible();
                    }}
                  >
                    <CloseRounded />
                  </IconButton>
                ),
                indicator: null,
              })}
              sx={{ minWidth: 200 }}
            >
              <Option
                sx={{ fontFamily: "Outfit", fontWeight: "500" }}
                onClick={() => handleLocationFilter("South Korea")}
                value="South Korea"
              >
                South Korea
              </Option>
              <Option
                sx={{ fontFamily: "Outfit", fontWeight: "500" }}
                onClick={() => handleLocationFilter("United States")}
                value="United States"
              >
                United States
              </Option>
              <Option
                sx={{ fontFamily: "Outfit", fontWeight: "500" }}
                onClick={() => handleLocationFilter("England")}
                value="England"
              >
                England
              </Option>
              <Option
                sx={{ fontFamily: "Outfit", fontWeight: "500" }}
                onClick={() => handleLocationFilter("Japan")}
                value="Japan"
              >
                Japan
              </Option>
              <Option
                sx={{ fontFamily: "Outfit", fontWeight: "500" }}
                onClick={() => handleLocationFilter("China")}
                value="China"
              >
                China
              </Option>
            </Select>
            <Select
              // action={action}
              value={value}
              placeholder="Salary Range"
              onChange={(e, newValue) => setValue(newValue)}
              {...(value && {
                // display the button and remove select indicator
                // when user has selected a value
                endDecorator: (
                  <IconButton
                    size="sm"
                    variant="plain"
                    color="neutral"
                    onMouseDown={(event) => {
                      // don't open the popup when clicking on this button
                      event.stopPropagation();
                    }}
                    onClick={() => {
                      setValue(null);
                      handleResetAllData();
                      // action.current?.focusVisible();
                    }}
                  >
                    <CloseRounded />
                  </IconButton>
                ),
                indicator: null,
              })}
              sx={{ minWidth: 200 }}
            >
              <Option
                sx={{ fontFamily: "Outfit", fontWeight: "500" }}
                onClick={() => handleFilterSalary("$50k-$")}
                value="$50k-$80k"
              >
                $50k-$80k
              </Option>
              <Option
                sx={{ fontFamily: "Outfit", fontWeight: "500" }}
                onClick={() => handleFilterSalary("$80k-$100k")}
                value="$80k-$100k"
              >
                $80k-$100k
              </Option>
              <Option
                sx={{ fontFamily: "Outfit", fontWeight: "500" }}
                onClick={() => handleFilterSalary("$100k-$120k")}
                value="$100k-$120k"
              >
                $100k-$120k
              </Option>
              <Option
                sx={{ fontFamily: "Outfit", fontWeight: "500" }}
                onClick={() => handleFilterSalary("$120k-$150k")}
                value="$120k-$150k"
              >
                $120k-$150k
              </Option>
              <Option
                sx={{ fontFamily: "Outfit", fontWeight: "500" }}
                onClick={() => handleFilterSalary("$150k-$200k")}
                value="$150k-$200k"
              >
                $150k-$200k
              </Option>
            </Select>
            <Select
              // action={action}
              value={value}
              placeholder="Sort By"
              onChange={(e, newValue) => setValue(newValue)}
              {...(value && {
                // display the button and remove select indicator
                // when user has selected a value
                endDecorator: (
                  <IconButton
                    size="sm"
                    variant="plain"
                    color="neutral"
                    onMouseDown={(event) => {
                      // don't open the popup when clicking on this button
                      event.stopPropagation();
                    }}
                    onClick={() => {
                      setValue(null);
                      handleResetAllData();
                      // action.current?.focusVisible();
                    }}
                  >
                    <CloseRounded />
                  </IconButton>
                ),
                indicator: null,
              })}
              sx={{ minWidth: 200 }}
            >
              <Option
                style={{ fontFamily: "Outfit", fontWeight: "500" }}
                onClick={() => handleFilterJobPositon("Developer")}
                value="Developer"
              >
                Developer
              </Option>
              <Option
                style={{ fontFamily: "Outfit", fontWeight: "500" }}
                onClick={() => handleFilterJobPositon("Designer")}
                value="Designer"
              >
                Designer
              </Option>
              <Option
                style={{ fontFamily: "Outfit", fontWeight: "500" }}
                onClick={() => handleFilterJobPositon("Manager")}
                value="Manager"
              >
                Manager
              </Option>
              <Option
                style={{ fontFamily: "Outfit", fontWeight: "500" }}
                onClick={() => handleFilterJobPositon("Manager")}
                value="Japan"
              >
                Manager
              </Option>
            </Select>
          </Options>
          <Jobs>
            {filteredData &&
              filteredData.map((data) => (
                <Card
                  key={data.id}
                  sx={{ width: "100%", borderRadius: "15px", padding: "5px" }}
                >
                  <CardContent
                    className="resposiveCardContent"
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <ChipWrapper>
                      <ImgWrapper>
                        <img
                          src="https://s3-alpha.figma.com/hub/file/697598809/ce5e0bb3-16b9-4d88-9bca-7d237fe725a8-cover.png"
                          style={{ width: "60px", height: "60px" }}
                        />
                        <div>
                          <h3
                            style={{
                              fontFamily: "Outfit",
                              fontWeight: "400",
                              color: "#4348DB",
                              margin: "0px",
                            }}
                          >
                            {data.name}
                          </h3>
                          <p
                            style={{
                              fontFamily: "Outfit",
                              fontWeight: "400",
                              margin: "0px",
                            }}
                          >
                            {data.corporateType}
                          </p>
                        </div>
                      </ImgWrapper>
                      <Details>
                        <div className="chip">
                          <PlaceIcon />
                          <p
                            style={{
                              fontFamily: "Outfit",
                              fontWeight: "400",
                              margin: "0px",
                            }}
                          >
                            {data.location}
                          </p>
                        </div>
                        <div className="chip">
                          <PaidIcon />
                          <p
                            style={{
                              fontFamily: "Outfit",
                              fontWeight: "400",
                              margin: "0px",
                            }}
                          >
                            {data.salary}
                          </p>
                        </div>
                        <div className="chip">
                          <WorkIcon />
                          <p
                            style={{
                              fontFamily: "Outfit",
                              fontWeight: "400",
                              margin: "0px",
                            }}
                          >
                            {data.employmentType}
                          </p>
                        </div>
                      </Details>
                      <UploadTimeWrapper>
                        <p
                          style={{
                            fontFamily: "Outfit",
                            fontWeight: "400",
                            margin: "0px",
                          }}
                        >
                          {formatDate(data.createdAt) || "No data"}
                        </p>
                      </UploadTimeWrapper>
                      <ExpandMoreWrapper>
                        <ExpandMore
                          onClick={() => handleExpandClick(data._id)}
                          aria-expanded={expanded[data._id]}
                          aria-label="show more"
                        >
                          <ExpandMoreIcon />
                        </ExpandMore>
                      </ExpandMoreWrapper>
                    </ChipWrapper>
                  </CardContent>
                  <Collapse in={expanded[data._id]} timeout="auto">
                    <CardContent>
                      <Typography
                        sx={{
                          margin: "3px",
                          fontFamily: "Montserrat",
                          fontWeight: "bold",
                        }}
                        paragraph
                      >
                        Role:
                      </Typography>
                      <Typography
                        sx={{ fontFamily: "Outfit", fontWeight: "light" }}
                        paragraph
                      >
                        {data.jobRole}
                      </Typography>
                      <Typography
                        sx={{ fontFamily: "Outfit", fontWeight: "light" }}
                        paragraph
                      >
                        {data.role}
                      </Typography>
                      {data.responsibilities && (
                        <>
                          <Typography
                            sx={{
                              margin: "3px",
                              fontFamily: "Montserrat",
                              fontWeight: "bold",
                            }}
                            paragraph
                          >
                            Responsibilities:
                          </Typography>
                          <ul style={{ marginTop: "3px" }}>
                            {data.responsibilities
                              .split(",")
                              .map((responsibility, index) => (
                                <li
                                  style={{
                                    fontFamily: "Outfit",
                                    fontWeight: "300",
                                  }}
                                  key={index}
                                >
                                  {responsibility.trim()}
                                </li>
                              ))}
                          </ul>
                        </>
                      )}
                      <Typography
                        sx={{
                          margin: "3px",
                          fontFamily: "Montserrat",
                          fontWeight: "bold",
                        }}
                        paragraph
                      >
                        Education:
                      </Typography>
                      <Typography
                        sx={{ fontFamily: "Outfit", fontWeight: "light" }}
                        paragraph
                      >
                        {data.education}
                      </Typography>
                    </CardContent>
                  </Collapse>
                </Card>
              ))}
          </Jobs>
        </Wrapper>
      </Container>
      <Slider />
      <Footer />
    </div>
  );
};

export default MainPage;
