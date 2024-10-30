/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Caleb Andreas
 * Created on: Oct 2024
 * This program that goes forward when sonar 
 * distance is less than 10cm.
*/

// Variables.
let distanceToObject: number

// Cleanup.
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// Starting distance check.
distanceToObject = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
)

// Motor loop.
while (true) {
    // Move forwards 10 cm if distanceToObject > 10
    if (distanceToObject > 10) {
        robotbit.StpCarMove(10, 65)
        distanceToObject = sonar.ping(
            DigitalPin.P1,
            DigitalPin.P2,
            PingUnit.Centimeters
        )
    }
    // Move backwards 10 cm and turn 90 degrees if 
    // distanceToObject <= 10.
    if (distanceToObject <= 10) {
        robotbit.StpCarMove(-10, 65)
        robotbit.StepperTurn(robotbit.Steppers.M1, robotbit.Turns.T1B2)
        distanceToObject = sonar.ping(
            DigitalPin.P1,
            DigitalPin.P2,
            PingUnit.Centimeters
        )
    }
}
