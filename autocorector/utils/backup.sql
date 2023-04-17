-- MySQL dump 10.13  Distrib 5.7.30, for Linux (x86_64)
--
-- Host: localhost    Database: orm_bbdd_test
-- ------------------------------------------------------
-- Server version	5.7.30-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `SequelizeMeta`
--

DROP TABLE IF EXISTS `SequelizeMeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SequelizeMeta`
--

LOCK TABLES `SequelizeMeta` WRITE;
/*!40000 ALTER TABLE `SequelizeMeta` DISABLE KEYS */;
INSERT INTO `SequelizeMeta` VALUES ('20200511101141-createHospitalTable.js'),('20200511101145-createPatientTable.js'),('20200511101149-createDoctorTable.js'),('20200511103555-createPatientDoctorTable.js');
/*!40000 ALTER TABLE `SequelizeMeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `doctor`
--

DROP TABLE IF EXISTS `doctor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `doctor` (
  `id` char(36) CHARACTER SET latin1 COLLATE latin1_bin NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `surname` varchar(255) DEFAULT NULL,
  `speciality` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doctor`
--

LOCK TABLES `doctor` WRITE;
/*!40000 ALTER TABLE `doctor` DISABLE KEYS */;
INSERT INTO `doctor` VALUES ('014bd297-0a3d-4a17-b207-cff187690045','Dr Pedro','Garcia','Medico de cabecera','2020-05-12 16:25:11','2020-05-12 16:25:11'),('1497d1be-577a-41ad-b129-45271e113cc0','Dra Luisa','Alarcon','Traumatologo','2020-05-12 16:25:11','2020-05-12 16:25:11'),('5ba70d7d-67fc-430c-ab39-1b62e12f2346','Dra Amelia','Huertas','Cardiologo','2020-05-12 16:25:11','2020-05-12 16:25:11'),('8f5cb256-7f39-4293-817a-b5e50a0e0062','Dr Casimiro','Llorente','Neumologo','2020-05-12 16:25:11','2020-05-12 16:25:11'),('9bb2e300-fa15-4063-a291-13f7199ddb52','Dra Patricia','Sanchez','Reumatologo','2020-05-12 16:25:11','2020-05-12 16:25:11'),('a0f54d52-5ccb-4e50-adca-5ea0064262fd','Dra Cristina','Pozo','Medico de cabecera','2020-05-12 16:25:11','2020-05-12 16:25:11'),('fc4ba036-8a70-4c6e-9b23-dd2a8035c142','Dr Miguel','Duran','Traumatologo','2020-05-12 16:25:11','2020-05-12 16:25:11');
/*!40000 ALTER TABLE `doctor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hospital`
--

DROP TABLE IF EXISTS `hospital`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hospital` (
  `id` char(36) CHARACTER SET latin1 COLLATE latin1_bin NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hospital`
--

LOCK TABLES `hospital` WRITE;
/*!40000 ALTER TABLE `hospital` DISABLE KEYS */;
INSERT INTO `hospital` VALUES ('9f8a5c90-cf1a-4ca3-9dea-c6a94174ae69','Hospital Univesitario La Paz','Madrid','2020-05-12 16:25:11','2020-05-12 16:25:11'),('b04fde75-59d8-457f-82b9-c25f2c64abfc','Hospital Carlos III','Madrid','2020-05-12 16:25:11','2020-05-12 16:25:11'),('c5d7cbea-55a4-4809-9969-82b148032a0e','Hospital del Mar','Barcelona','2020-05-12 16:25:11','2020-05-12 16:25:11'),('d2dc1154-1329-4e56-a5c3-8e88b63f3c4a','Hospital Virgen de la Salud','Toledo','2020-05-12 16:25:11','2020-05-12 16:25:11'),('db6da10f-4ec4-468a-ad46-36a407480fa7','Complejo Asistencial de Segovia','Segovia','2020-05-12 16:25:11','2020-05-12 16:25:11');
/*!40000 ALTER TABLE `hospital` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patient`
--

DROP TABLE IF EXISTS `patient`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `patient` (
  `id` char(36) CHARACTER SET latin1 COLLATE latin1_bin NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `surname` varchar(255) DEFAULT NULL,
  `dni` varchar(255) DEFAULT NULL,
  `hospital_id` char(36) CHARACTER SET latin1 COLLATE latin1_bin DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `hospital_id` (`hospital_id`),
  CONSTRAINT `patient_ibfk_1` FOREIGN KEY (`hospital_id`) REFERENCES `hospital` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient`
--

LOCK TABLES `patient` WRITE;
/*!40000 ALTER TABLE `patient` DISABLE KEYS */;
INSERT INTO `patient` VALUES ('088d58e2-7691-47b6-a322-eeffcadc9054','Andres','Lopez','222333','b04fde75-59d8-457f-82b9-c25f2c64abfc','2020-05-12 16:25:11','2020-05-12 16:25:11'),('3a268172-6c5c-4d9b-8964-8b9a1e531af5','Juan','Rodriguez','123123','9f8a5c90-cf1a-4ca3-9dea-c6a94174ae69','2020-05-12 16:25:11','2020-05-12 16:25:11'),('508fb53c-c212-453f-ab17-cf56049f5a2c','Raquel','Dueñas','666777','9f8a5c90-cf1a-4ca3-9dea-c6a94174ae69','2020-05-12 16:25:11','2020-05-12 16:25:11'),('623f492d-a42c-481e-bf21-c0acbc1b90f8','Mario Alejandro','Arcentales','777888','db6da10f-4ec4-468a-ad46-36a407480fa7','2020-05-12 16:25:11','2020-05-12 16:25:11'),('8ec8c43b-f7e1-43e4-b70f-6d5a9799a86a','Carlos','Lechon','333444','c5d7cbea-55a4-4809-9969-82b148032a0e','2020-05-12 16:25:11','2020-05-12 16:25:11'),('923ec756-87b7-4743-808b-795a04b6dd21','Diana','Pintor','555666','9f8a5c90-cf1a-4ca3-9dea-c6a94174ae69','2020-05-12 16:25:11','2020-05-12 16:25:11'),('a1965d07-caae-407d-8df1-060e88015932','Ana','Durcal','555555','d2dc1154-1329-4e56-a5c3-8e88b63f3c4a','2020-05-12 16:25:11','2020-05-12 16:25:11');
/*!40000 ALTER TABLE `patient` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patient_doctor`
--

DROP TABLE IF EXISTS `patient_doctor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `patient_doctor` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `patient_id` char(36) CHARACTER SET latin1 COLLATE latin1_bin DEFAULT NULL,
  `doctor_id` char(36) CHARACTER SET latin1 COLLATE latin1_bin DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `patient_id` (`patient_id`),
  KEY `doctor_id` (`doctor_id`),
  CONSTRAINT `patient_doctor_ibfk_1` FOREIGN KEY (`patient_id`) REFERENCES `patient` (`id`) ON DELETE CASCADE,
  CONSTRAINT `patient_doctor_ibfk_2` FOREIGN KEY (`doctor_id`) REFERENCES `doctor` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient_doctor`
--

LOCK TABLES `patient_doctor` WRITE;
/*!40000 ALTER TABLE `patient_doctor` DISABLE KEYS */;
INSERT INTO `patient_doctor` VALUES (1,'3a268172-6c5c-4d9b-8964-8b9a1e531af5','014bd297-0a3d-4a17-b207-cff187690045','2020-05-12 16:25:11','2020-05-12 16:25:11'),(2,'088d58e2-7691-47b6-a322-eeffcadc9054','a0f54d52-5ccb-4e50-adca-5ea0064262fd','2020-05-12 16:25:11','2020-05-12 16:25:11'),(3,'8ec8c43b-f7e1-43e4-b70f-6d5a9799a86a','1497d1be-577a-41ad-b129-45271e113cc0','2020-05-12 16:25:11','2020-05-12 16:25:11'),(4,'923ec756-87b7-4743-808b-795a04b6dd21','9bb2e300-fa15-4063-a291-13f7199ddb52','2020-05-12 16:25:11','2020-05-12 16:25:11'),(5,'3a268172-6c5c-4d9b-8964-8b9a1e531af5','9bb2e300-fa15-4063-a291-13f7199ddb52','2020-05-12 16:25:11','2020-05-12 16:25:11');
/*!40000 ALTER TABLE `patient_doctor` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-05-12 18:25:53
