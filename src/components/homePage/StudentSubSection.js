import React from 'react';

const StudentSubSection = () =>
	<div>
			<h2>Students</h2>
			<div className="teams">
				<div className="mechanical">
					<i className="fa fa-cogs" aria-hidden="true"></i>
					<h3>Mechanical</h3>
					<p>
						Our mechanical team focuses on hardware and construction; it’s
						structure, it’s moving parts, and it’s maintenance. This team
						studies the applications of pneumatics, motors, and gearboxes,
						along with engineering design and physics.
					</p>
				</div>
			<div className="programming">
				<i className="fa fa-code" aria-hidden="true"></i>
				<h3>Electrical/Programming</h3>
				<p>
					Our electronics team is divided into electrical engineering and
					computer programming. These sister disciplines work in tandem to
					give function and life to projects. The team programs in primarily
					Java and is regularly involved in computers.
				</p>
			</div>
		</div>
	</div>;


export default StudentSubSection;
