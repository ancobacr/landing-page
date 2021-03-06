import React from "react";

export function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
			<div className="container">
				<a className="navbar-brand" href="#">
					<strong>Start Boostrap</strong>
				</a>

				<div>
					<button
						className="navbar-toggler "
						type="button"
						data-toggle="collapse"
						data-target="#navbarToggler"
						aria-controls="navbarToggler"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div
						className="collapse navbar-collapse"
						id="navbarToggler">
						<ul className="navbar-nav mr-auto mt-2 mt-lg-0 ">
							<li className="nav-item active">
								<a className="nav-link" href="#">
									Home{" "}
									<span className="sr-only">(current)</span>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									About
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Services
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
}
