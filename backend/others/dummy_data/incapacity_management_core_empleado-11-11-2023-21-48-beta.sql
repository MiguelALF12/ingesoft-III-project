-- MariaDB dump 10.19  Distrib 10.6.12-MariaDB, for Linux (x86_64)
--
-- Host: mysql.hostinger.ro    Database: u574849695_19
-- ------------------------------------------------------
-- Server version	10.6.12-MariaDB-cll-lve

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `incapacity_management_core_empleado`
--

DROP TABLE IF EXISTS `incapacity_management_core_empleado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `incapacity_management_core_empleado` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `cedula` varchar(10) NOT NULL,
  `telefono` varchar(10) NOT NULL,
  `departamento` varchar(50) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `incapacity_management_core_empleado`
--

LOCK TABLES `incapacity_management_core_empleado` WRITE;
/*!40000 ALTER TABLE `incapacity_management_core_empleado` DISABLE KEYS */;
INSERT INTO `incapacity_management_core_empleado` VALUES (1,'Dr. Saul Barrientos','Nieves','37723230','652 46 433','Orosco del Bages','2009-02-28 23:02:31','1991-03-24 01:17:21'),(2,'Anna Vigil Tercero','Rangel','90','+34 690 63','El Jaime','2017-08-05 18:10:05','1997-02-12 16:00:50'),(3,'Alba Fajardo','Olivares','3804412','+34 950674','La Fuentes','1982-03-13 12:35:41','1996-07-03 15:08:23'),(4,'Ismael Hurtado','Contreras','90351','627469792','Barragán Medio','2015-03-08 17:27:25','1986-05-31 08:42:22'),(5,'Ona Garica','Lebrón','60','935 812097','Los Tafoya de San Pedro','2001-04-27 10:26:33','1982-01-19 12:03:54'),(6,'Roberto Romo','Valdés','86620','609 76 382','Vall Aragón de la Sierra','2023-05-13 23:37:03','2002-12-05 04:34:47'),(7,'Abril Sisneros','Cuellar','9','952584486','Los Orozco del Pozo','1972-07-17 04:28:26','2017-01-10 10:26:47'),(8,'Nil Melgar Tercero','Torres','31588943','659874307','O Carretero','1975-11-30 01:55:50','1999-12-21 14:43:17'),(9,'Ing. Celia de Anda Segundo','Sanz','1975','+34 624730','Los Rangel','2020-12-02 11:42:49','1984-08-14 12:59:39'),(10,'Alejandro Galván','Venegas','30612275','+34 636-99','O Alanis del Bages','1986-01-23 01:40:56','2013-06-08 16:54:30'),(11,'Guillermo Jaime','Alicea','1','+34 968 52','Las Girón Medio','2006-04-27 05:27:19','2006-07-31 06:44:02'),(12,'Lic. Gonzalo Santos Tercero','Téllez','76','624 39 376','Villa Madera de Lemos','1992-05-11 08:26:20','1973-08-21 04:44:35'),(13,'Ismael Ruelas','Gil','859480262','+34 911-63','El Rivero del Bages','2013-09-12 04:09:57','2018-05-17 04:23:17'),(14,'Ivan Guevara','Ruiz','','+34 969-75','Anaya de San Pedro','2004-12-17 22:41:02','1979-10-25 16:48:41'),(15,'Ing. Alex Collazo Hijo','Rivera','9632987','695 343551','Ordóñez del Barco','1977-06-01 18:18:58','2011-03-20 22:20:08'),(16,'Rayan Quesada','Benavides','89060725','979 06 920','El Sáez','1979-11-13 01:49:11','1990-03-26 16:52:10'),(17,'Juan Mendoza','Solorzano','97','606401801','Santillán del Barco','1976-11-04 14:31:37','1986-12-30 09:19:25'),(18,'Nora Nava Hijo','Uribe','64','+34 952659','Vall Jasso','2004-03-23 17:07:37','1975-03-21 08:14:55'),(19,'Juan Jose Cuellar','Palomo','828212','623-888140','Olivas de Ulla','1973-01-01 18:57:54','2005-07-26 19:11:06'),(20,'Lic. Guillem Reina Segundo','Alicea','443','+34 974-55','Las Heredia Baja','1972-04-17 14:09:20','1973-10-06 02:09:49'),(21,'Lic. Angel Muñoz','Carmona','445667','974 480406','Bétancourt Medio','1989-03-27 03:21:23','1984-05-06 11:23:39'),(22,'Elsa Mateos','Campos','2','+34 681-39','El Muñiz','2005-08-01 15:32:54','1980-07-16 12:52:20'),(23,'Pablo Mejía','Gamez','259334464','691861686','A Sáez de San Pedro','1972-06-21 06:46:28','1983-06-07 05:28:30'),(24,'Ing. Sandra Ybarra Tercero','Hernádez','42','+34 951 36','Lucio de las Torres','2019-01-09 17:59:52','1981-02-20 21:08:28'),(25,'Jesus Rojo','Fajardo','30759','941 212456','Mata de Arriba','2003-05-21 10:22:41','1996-12-01 05:04:11'),(26,'Helena Trujillo','Serrato','29989970','+34 603 94','Villa Pizarro del Mirador','1982-12-15 21:23:50','2020-03-30 03:03:25'),(27,'Juan Jose Mendoza','Barrientos','48240922','993744839','Castro de Lemos','2001-01-19 08:59:50','2003-06-03 20:57:32'),(28,'Adam Collado','Vaca','618','+34 937 82','El Girón del Barco','2006-07-15 14:51:16','2003-11-01 00:08:28'),(29,'Adam Tórrez','Puig','480','631 71 113','Barroso del Pozo','2014-05-22 00:25:52','1991-08-03 18:32:59'),(30,'Alma Camarillo','Expósito','378','999219975','As Tafoya','1990-12-17 20:41:21','2006-12-16 10:35:33');
/*!40000 ALTER TABLE `incapacity_management_core_empleado` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-11 21:48:10
