import React from "react";
import {
  Companies,
  Container,
  Intro,
  Jobs,
  NavLinks,
  Navbar,
  Options,
  Wrapper,
} from "./style";
import TemporaryDrawer from "../drawer/dashboard";
import Slider from "../carousel/Carousel";
import { Card, CardHeader, IconButton, TextField } from "@mui/material";
import GoogleMaps from "../muicomponets/location";
import { styled } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Footer from "../muicomponets/footer";

const BASEURL = "http://localhost:5050/api/v1/";


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const MainPage = () => {
  const [allData, setAllData] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [filteredData, setFilteredData] = React.useState("");
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

// to get all data
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASEURL}jobs/getAllJobs`);
        const data = await response.json();
        setAllData(data.data);
        setFilteredData(data.data);
      } catch (error) {
        console.log("There is an error fetching data:", error);
      }
    };
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
          <h1>
            Find <span style={{ color: "#4348DB" }}>Web3</span> and Relatable
            jobs for Students and Graduates
          </h1>
          <p style={{ color: "#AAAAAA" }}>Connecting Universities to Web3</p>
        </Intro>
        <Wrapper>
          <Options>
            <TextField  label="Search for jobs.." id="fullWidth" />
            {/* <GoogleMaps/> */}
          </Options>
          {/* <Jobs>
        {filteredData &&
          filteredData.map((data) => (
            <Card key={data.id} sx={{ width: "100%", borderRadius: "15px", padding: "5px" }}>
              <CardContent sx={{ display: "flex", alignItems: "center" }}>
                <div style={{ display: "flex", flex: "1", gap: "10px" }}>
                  <JobImg />
                  <div>
                    <h3 style={{ margin: "0px" }}>{data.name}</h3>
                    <p style={{ margin: "0px" }}>{data.corporateType}</p>
                  </div>
                </div>
                <div style={{ display: "flex", flex: "1", gap: "20px" }}>
                  <Chip sx={{ padding: "5px", borderRadius: "5px", background: "#F6F6F6" }} variant="soft" startDecorator={<LocationOnIcon />}>
                    {data.location}
                  </Chip>
                  <Chip sx={{ padding: "5px", borderRadius: "5px", background: "#F6F6F6" }} variant="soft" startDecorator={<LocalAtmIcon />}>
                    {data.salary}
                  </Chip>
                  <Chip sx={{ padding: "5px", borderRadius: "5px", background: "#F6F6F6" }} variant="soft" startDecorator={<WorkOutlineIcon />}>
                    {data.employmentType}
                  </Chip>
                </div>
                <div style={{ display: "flex", flex: "1" }}>
                  <ExpandMore
                    onClick={() => handleExpandClick(data._id)}
                    aria-expanded={expanded[data._id]}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </div>
              </CardContent>
              <Collapse in={expanded[data._id]} timeout="auto">
                <CardContent>
                  <Typography paragraph>Method:</Typography>
                  <Typography paragraph>Heat 1/2</Typography>
                  <Typography paragraph>Heat oil in</Typography>
                  <Typography paragraph>
                    Add rice and stir very gently to distribute. Top with
                    artichokes and minutes more. (Discard any mussels that
                    don&apos;t open.)
                  </Typography>
                  <Typography>
                    Set aside off of the heat to let rest for 10 minutes, and then
                    serve.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          ))}
      </Jobs> */}
        </Wrapper>
        
      </Container>
      
      <Slider />
      <Footer/>
    </div>
  );
};

export default MainPage;
