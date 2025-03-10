version: '3'

services:
  selenium-hub:
    image: selenium/hub:latest
    ports:
      - "4442-4444:4442-4444"
    networks:
      - grid

  node-chrome:
    image: selenium/node-chrome:latest
    environment:
      - SE_EVENT_BUS_HOST=selenium-hub
      - SE_EVENT_BUS_PUBLISH_PORT=4442
      - SE_EVENT_BUS_SUBSCRIBE_PORT=4443
      - NODE_MAX_INSTANCE=3
      - NODE_MAX_SESSION=2 
    networks:
      - grid

  node-firefox:
    image: selenium/node-firefox:latest
    environment:
      - SE_EVENT_BUS_HOST=selenium-hub
      - SE_EVENT_BUS_PUBLISH_PORT=4442
      - SE_EVENT_BUS_SUBSCRIBE_PORT=4443
    networks:
      - grid
  node-edge:
	image: selenium/node-edge:latest
	environment:
	  - SE_EVENT_BUS_HOST=selenium-hub
	  - SE_EVENT_BUS_PUBLISH_PORT=4442
	  - SE_EVENT_BUS_SUBSCRIBE_PORT=4443
	 networks:
	   - grid	  
	  

networks:
  grid:
    driver: bridge