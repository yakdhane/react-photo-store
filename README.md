# Photo Store

A simple React application that displays photos fetched from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/).

## Installation

To install the dependencies, run:

```
npm install
```

## Usage

To run the application, run:

```
npm start
```

This will start the application on [http://localhost:3000](http://localhost:3000).

## Docker

To run the application using Docker, first build the Docker image:

```
docker build -t photo-store .
```

Then, run the Docker container:

```
docker run -p 3000:3000 photo-store
```

This will start the application on [http://localhost:3000](http://localhost:3000).

## File Structure

- `App.jsx`: The main component that fetches the photos from the API and renders the `PhotoStore` component.
- `PhotoStore.jsx`: A component that renders a list of `Photo` components.
- `Photo.jsx`: A component that renders a single photo with its title.
- `Dockerfile`: A file that specifies the Docker image for the application.