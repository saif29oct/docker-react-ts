## Installation
- step-1: Download or Clone the repository
- step-2: get inside the repository
  - `cd docker-react-ts`
- step-3: copy `app` directory to your home directory
  - `cp -r app ~` 
- step-4: initialize react-typescript project
  - `docker-compose up --build`

## Configuration Options
- you can use .env file to according to `.env.example` file used in `docker-compose` file
- you can define your own startup commands via `start-react.sh` script
- To create an alias for running npm command add the following line at the end of file `~/.bashrc`
  - `alias d-npm='docker exec react-ts npm'`
    - Note: here `react-ts` is the container name defined in `docker-compose` file
      - Example: `d-npm install` can be used instead of `docker exec react-ts npm install`

## Tips
- To initialize docker-react-ts for an existing react project 
  - step-1: follow installation steps 1-2
  - step-2: fix the `APP_DIR` path
