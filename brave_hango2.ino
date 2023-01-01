#include <Wire.h>

// C++ code
//

const int pinRed = 13;
const int pinYellow = 12;
const int pinGreen = 3;
const int exit_trig_pin = 4;
const int exit_echo_pin = 7;
const int enter_trig_pin = 2;
const int enter_echo_pin =8;

long duration;
int distance;
long duration2;
int distance2;
int count = 0;
int count_left = 0;

void setup()
{
  pinMode(enter_trig_pin, OUTPUT);
  pinMode(enter_echo_pin, INPUT);
  pinMode(exit_trig_pin, OUTPUT);
  pinMode(exit_echo_pin, INPUT);
  pinMode(pinRed, OUTPUT);
  pinMode(pinYellow, OUTPUT);
  pinMode(pinGreen, OUTPUT);
  Serial.begin(9600);
  Wire.begin(2);
  Wire.onReceive(getLeftCount);
}

void getLeftCount(int bytes)
{
  printf("Hehe");
  count_left = Wire.read();
}

void loop()
{  
  digitalWrite(enter_trig_pin, LOW);
  delayMicroseconds(2);
  digitalWrite(enter_trig_pin, HIGH);
  delayMicroseconds(10);
  digitalWrite(enter_trig_pin, LOW);
  delayMicroseconds(10);	
  
  //Enter Sensor
  duration = pulseIn(enter_echo_pin, HIGH);
  //Serial.print("Duration: ");
  //Serial.println(duration);
  distance = duration * 0.034/2;
  //Serial.print("Enter Distance: ");
  //Serial.println(distance);
  
  //Exit Sensor
  digitalWrite(exit_trig_pin, LOW);
  delayMicroseconds(2);
  digitalWrite(exit_trig_pin, HIGH);
  delayMicroseconds(10);
  digitalWrite(exit_trig_pin, LOW);
  
  duration2 = pulseIn(exit_echo_pin, HIGH);
  //Serial.print("Duration2: ");
  //Serial.println(duration2);
  distance2 = duration2 * 0.034/2;
  
  
  //Serial.print("Exit Distance: ");
  //Serial.println(distance2);
  //delay(500);
  
  //if(distance <=50 && distance > 35)
  //{
    //digitalWrite(pinGreen, HIGH);
    //digitalWrite(pinRed, LOW);
    //digitalWrite(pinYellow, LOW);
  //}
  
  
  
  //Enter Distance
  if(distance >= 25 && distance < 30)
  {
    count = count + 1;
    Serial.println(count);
    Wire.beginTransmission(1);
   	Wire.write(count);
    Wire.endTransmission();
    delay(500);
  }
  
  //Exit Distance
  if(distance2 >= 25 && distance2 <= 30)
  {
    count = count - 1;
    Serial.println(count);
    Wire.beginTransmission(1);
   	Wire.write(count);
    Wire.endTransmission();
    delay(500);
  }
    
  if(count <= count_left)
  {
    digitalWrite(pinRed, HIGH);
    digitalWrite(pinYellow, LOW);
    digitalWrite(pinGreen, LOW);
  }
  
  else
  {
    digitalWrite(pinRed, LOW);
    digitalWrite(pinYellow, HIGH);
    delay(2000);
    digitalWrite(pinYellow, LOW);
    digitalWrite(pinGreen, HIGH);
  }
  
  
  //if(distance <= 20 && distance > 0)
  //{
    //digitalWrite(pinGreen, LOW);
    //digitalWrite(pinYellow, LOW);
    //digitalWrite(pinRed, HIGH);
  //}
  
  //if(distance > 50 && distance < 0)
  //{
    //Serial.println("Distance out of range!");
    
    //digitalWrite(pinRed, HIGH);
    //digitalWrite(pinGreen, LOW);
    //digitalWrite(pinYellow, LOW);
    
    //Serial.print(distance);
    //Serial.print("cm");
    //delay(500);
  //}
  
  
}