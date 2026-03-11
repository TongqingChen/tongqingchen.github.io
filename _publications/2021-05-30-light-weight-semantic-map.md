---
title: "A Light-Weight Semantic Map for Visual Localization towards Autonomous Driving"
collection: publications
category: journals
permalink: /publication/2021-05-30-light-weight-semantic-map-visual-localization
excerpt: '<img class="pub-img" src="/images/roadmap.png">This paper proposes a compact semantic map representation to enable real-time visual localization for low-cost autonomous driving platforms.'
date: 2021-05-30
venue: '2021 IEEE International Conference on Robotics and Automation (ICRA)'
paperurl: 'https://ieeexplore.ieee.org/document/9561663' # 替换为实际PDF链接，如 '/files/lightweight_semantic_map.pdf'
citation: 'Tong Qin, Yuxin Zheng, <b class="text-blue">Tongqing Chen</b>, Yilun Chen, Qing Su. (2021). &quot;A Light-Weight Semantic Map for Visual Localization towards Autonomous Driving.&quot; <i>2021 IEEE International Conference on Robotics and Automation (ICRA)</i>.'
---

Accurate localization is of crucial importance for autonomous driving tasks. Nowadays, we have seen a lot of sensor-rich vehicles (e.g. Robo-taxi) driving on the street autonomously, which rely on high-accurate sensors (e.g. Lidar and RTK GPS) and high-resolution map. However, low-cost production cars cannot afford such high expenses on sensors and maps. How to reduce costs? How do sensor-rich vehicles benefit low-cost cars? In this paper, we proposed a light-weight localization solution, which relies on low-cost cameras and compact visual semantic maps. The map is easily produced and updated by sensor-rich vehicles in a crowd-sourced way. Specifically, the map consists of several semantic elements, such as lane line, crosswalk, ground sign, and stop line on the road surface. We introduce the whole framework of on-vehicle mapping, on-cloud maintenance, and user-end localization. The map data is collected and preprocessed on vehicles. Then, the crowd-sourced data is uploaded to a cloud server. The mass data from multiple vehicles are merged on the cloud so that the semantic map is updated in time. Finally, the semantic map is compressed and distributed to production cars, which use this map for localization. We validate the performance of the proposed map in real-world experiments and compare it against other algorithms. The average size of the semantic map is 36 kb/km. We highlight that this framework is a reliable and practical localization solution for autonomous driving.
<img class="pub-img-content" src="/images/roadmap.png">