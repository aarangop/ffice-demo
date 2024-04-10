-- CreateTable
CREATE TABLE "Waypoint" (
    "id" SERIAL NOT NULL,
    "routeId" INTEGER NOT NULL,
    "lat" DOUBLE PRECISION NOT NULL,
    "lng" DOUBLE PRECISION NOT NULL,
    "alt" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Waypoint_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FlightRoute" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "FlightRoute_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Waypoint" ADD CONSTRAINT "Waypoint_routeId_fkey" FOREIGN KEY ("routeId") REFERENCES "FlightRoute"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
