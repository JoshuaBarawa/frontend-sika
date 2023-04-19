FROM openjdk:20
ADD ./sika.jar sika.jar
ENTRYPOINT ["java", "jar", "sika.jar"]