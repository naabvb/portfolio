import { Box, Text } from "@chakra-ui/react";
import RepositoryLink from "../fragments/repositoryLink";

export const projects = [
  {
    card: {
      badges: ["NodeJS", "React", "Python"],
      header: "Trailcams PWA",
      image: "trailcams.png",
      body: "Fullstack application that consists of NodeJS backend, React frontend, multiple Python microservices and AWS integration.",
    },
    modal: {
      header: "Trailcams PWA",
      image: "trailcams.png",
      body: (
        <Box>
          <Text p="1" my="3">
            This web application was built to resolve issues with viewing images
            from multiple trailcams that used multiple emails. On the background
            three different Python microservices pull and if necessary, remove
            images using Gmail API. These images are then repackaged to contain
            accurate EXIF-data and uploaded to AWS S3.
          </Text>
          <RepositoryLink
            header="AttachmentBatchDownloader"
            body="Listens for arriving emails and batch downloads attachments."
            link="https://github.com/naabvb/attachmentBatchDownloader"
          />
          <RepositoryLink
            header="RemoveEmailsAndFiles"
            body="Microservice that removes files and correspoding emails."
            link="https://github.com/naabvb/removeEmailsAndFiles"
          />
          <RepositoryLink
            header="SyncDirector"
            body="Directs when to run different scripts based on AWS dynamoDB values."
            link="https://github.com/naabvb/syncDirector"
          />
          <Text p="1" my="3">
            The NodeJS backend handles authentication, listing correct images
            from different camera buckets, interaction with the images through
            UI and if the user should be notified of a new unseen image. The
            backend also deals with AWS S3 and DynamoDB integration.
          </Text>
          <Text p="1" my="3">
            The UI portion was developed using React and was mainly made for
            mobile PWA use, but it supports a desktop mode as well. The UI also
            has full light/dark-theme support with Material UI -elements.
          </Text>
          <RepositoryLink
            header="TrailcamPhotosToWebsite"
            body="PWA for viewing trailcam images with Node.js backend and react frontend."
            link="https://github.com/naabvb/trailcamPhotosToWebsite"
          />
        </Box>
      ),
      externalLink: {
        text: "View at riistakameratjatkala.com",
        link: "https://riistakameratjatkala.com",
      },
    },
  },
  {
    card: {
      badges: ["Javascript", "P5.JS"],
      header: "Fractal Experiments",
      image: "fractal.png",
      body: "Canvas app made with P5.JS that procedually generates landscape and perlin noise skybox with clouds.",
    },
    modal: {
      header: "Fractal Experiments",
      image: "fractal.png",
      body: (
        <Box mt="6">
          <RepositoryLink
            header="FractalExperiments"
            body="Canvas app made with P5.JS that procedually generates landscape and perlin noise skybox with clouds."
            link="https://github.com/naabvb/fractalExperiments"
          />
          <Text p="1" my="3">
            Fractal Experimens is a canvas app made using P5.JS which is an
            interpretation of the Processing library. This project originally
            started with just generating trees using fractals, but it eventually
            grew into procedually generated landscape, with mountains and
            shadows.
          </Text>
          <Text p="1" my="3">
            In addition to the landscape, the app also generates clouds and and
            "stars" that are each perlin noise generators. The procedual
            generation is based on viewport size and typically looks better with
            higher resolution.
          </Text>
        </Box>
      ),
      externalLink: {
        text: "View at pimiä.com",
        link: "https://pimiä.com",
      },
    },
  },
  {
    card: {
      badges: ["Flutter", "React Native", "Kotlin", "Swift"],
      header:
        "The challenges of cross-platform technologies in mobile development (Master's thesis)",
      image: "gradu.jpg",
      body: "Four benchmark apps for comparing different cross-platform techniques. Apps were developed with Flutter, React Native, Kotlin and Swift.",
    },
    modal: {
      header:
        "The challenges of cross-platform technologies in mobile development (Master's thesis)",
      image: "gradu.jpg",
      body: (
        <Box mt="6">
          <RepositoryLink
            header="Thesis benchmark apps"
            body="Contains the test assets and the developed benchmark apps for Flutter, React-Native, Kotlin and Swift that were used for thesis work."
            link="https://github.com/naabvb/TIES502-thesis-benchmarks"
          />
          <Text p="1" my="3">
            The ever increasing proliferation of smartphones is directing more
            and more resources to the development of various mobile
            applications. Mobile applications are traditionally developed with
            native technologies based on the target platform, but this can cause
            significant inefficiencies if the application is targeting multiple
            different platforms.
          </Text>
          <Text p="1" my="3">
            To address this inefficiency, so called cross-platform techniques
            have been developed to enable the utilization of same code on
            multiple target platforms. However, there are a huge number of
            different cross-platform techniques, in addition to which they offer
            very different levels of results.
          </Text>
          <Text p="1" my="3">
            This thesis investigates the applicability of two new cross-platform
            technologies: Flutter and React-Native to general mobile application
            development. Particular attention is paid to how the above
            techniques work compared to native techniques and what tradeoffs
            they require.
          </Text>
          <Text p="1" my="3">
            The study was carried out as a comparative study, which also
            included a test application produced with the different native and
            cross platform techniques as an experimental study. The results of
            this test application and the knowledge gathered in the literature
            review were then utilized to create a framework that provides a
            clear picture of the weaknesses and strengths of Flutter and
            React-Native from the perspective of both the application developer
            and the end user.
          </Text>
          <Text p="1" my="3">
            The test applications developed in this thesis also provide added
            value by enabling the renewal of the results in the future, should
            any of the studied techniques experience significant innovations.
          </Text>
        </Box>
      ),
      externalLink: {
        text: "Read (in Finnish) at jyx.jyu.fi",
        link: "https://jyx.jyu.fi/bitstream/handle/123456789/75322/URN%3aNBN%3afi%3ajyu-202105062634.pdf?sequence=1&isAllowed=y",
      },
    },
  },
];
