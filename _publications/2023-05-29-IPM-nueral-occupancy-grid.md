---
title: "Inverse perspective mapping-based neural occupancy grid map for visual parking"
collection: publications
category: journals
permalink: /publication/2023-05-29-IPM-nueral-occupancy-grid
excerpt: '<img class="pub-img" src="/images/ipm.png">This paper develops an IPM-based neural occupancy grid map to address perspective distortion in visual parking mapping tasks.'
date: 2023-05-29
venue: '2023 IEEE International Conference on Robotics and Automation (ICRA)'
paperurl: 'https://ieeexplore.ieee.org/document/10160849' # 替换为实际PDF链接，如 '/files/ipm_occupancy_grid.pdf'
citation: 'Xiangru Mu, Haoyang Ye, Daojun Zhu, <b class="text-blue">Tongqing Chen</b>, Tong Qin. (2023). &quot;Inverse Perspective Mapping-Based Neural Occupancy Grid Map for Visual Parking.&quot; <i>2023 IEEE International Conference on Robotics and Automation (ICRA)</i>.'
---
## Abstract
Sensing environmental obstacles and establishing an occupancy map of surroundings are critical to achieving automated parking for autonomous vehicles. This paper presents a method to obtain surrounding occupancy information from inverse perspective mapping (IPM) images. This method uses the easily-accessed pseudo-labels from LiDAR to supervise a visual network, which can detect occupied boundaries of obstacles. Fusing this visual occupancy with ego-motion information, we develop a multi-frame fusion approach to build a local OGM to realize online environment mapping. Compared with other learning-based occupancy approaches, our method does not require time-consuming and labor-intensive labeling for the environment due to the ground truth of surrounding occupancy coming from LiDAR easily. The proposed method achieves LiDAR-like performance with pure visual inputs, which greatly decreases the cost of real products. Experiments on driving and parking environments prove that our method can accurately sense surrounding occupancy information and build a robust occupancy map of the environment.
<img class="pub-img-content" src="/images/ipm.png">